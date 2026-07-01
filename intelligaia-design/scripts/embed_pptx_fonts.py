#!/usr/bin/env python3
"""
Embed the Intelligaia brand fonts into a .pptx so it renders correctly on any
machine (PowerPoint Win/Mac). Google Slides / some LibreOffice builds ignore
embedded fonts — see references/slides.md.

Usage:
    python3 embed_pptx_fonts.py input.pptx [output.pptx]

Defaults: output = "<input stem>-embedded.pptx".
Fonts are read from ../assets/fonts relative to this script (override with
the INTELLIGAIA_FONTDIR environment variable).
"""
import zipfile, re, os, sys

def main():
    if len(sys.argv) < 2:
        sys.exit("usage: embed_pptx_fonts.py input.pptx [output.pptx]")
    src = sys.argv[1]
    out = sys.argv[2] if len(sys.argv) > 2 else os.path.splitext(src)[0] + "-embedded.pptx"
    here = os.path.dirname(os.path.abspath(__file__))
    fontdir = os.environ.get("INTELLIGAIA_FONTDIR",
                             os.path.join(here, "..", "assets", "fonts"))

    # typeface -> {style: filename}; styles map to PowerPoint embeddedFont children
    FONTS = [
        ("Trirong",     {"regular":"Trirong-Regular.ttf",   "bold":"Trirong-SemiBold.ttf", "italic":"Trirong-Italic.ttf"}),
        ("Raleway",     {"regular":"Raleway-Regular.ttf",   "bold":"Raleway-Bold.ttf",     "italic":"Raleway-Italic.ttf"}),
        ("Azeret Mono", {"regular":"AzeretMono-Regular.ttf","bold":"AzeretMono-Medium.ttf"}),
    ]

    zin = zipfile.ZipFile(src, "r")
    ct   = zin.read("[Content_Types].xml").decode("utf-8")
    pres = zin.read("ppt/presentation.xml").decode("utf-8")
    rels = zin.read("ppt/_rels/presentation.xml.rels").decode("utf-8")

    if "fntdata" not in ct:
        ct = ct.replace("</Types>",
            '<Default Extension="fntdata" ContentType="application/x-fontdata"/></Types>')

    existing = [int(m) for m in re.findall(r'Id="rId(\d+)"', rels)]
    nid = (max(existing) + 1) if existing else 1
    REL = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/font"

    font_parts, rel_adds = [], []
    efl = ["<p:embeddedFontLst>"]
    fidx = 1
    for typeface, styles in FONTS:
        efl.append('<p:embeddedFont><p:font typeface="%s"/>' % typeface)
        for style in ("regular", "bold", "italic", "boldItalic"):
            if style not in styles:
                continue
            path = os.path.join(fontdir, styles[style])
            if not os.path.exists(path):
                sys.exit("missing font: %s" % path)
            arc = "ppt/fonts/font%d.fntdata" % fidx
            font_parts.append((arc, path))
            rid = "rId%d" % nid
            rel_adds.append('<Relationship Id="%s" Type="%s" Target="fonts/font%d.fntdata"/>' % (rid, REL, fidx))
            efl.append('<p:%s r:id="%s"/>' % (style, rid))
            nid += 1; fidx += 1
        efl.append("</p:embeddedFont>")
    efl.append("</p:embeddedFontLst>")
    efl = "".join(efl)

    rels = rels.replace("</Relationships>", "".join(rel_adds) + "</Relationships>")

    # enable embedding (avoid duplicate attribute if already present)
    pres = re.sub(r'(<p:presentation\b)', r'\1 embedTrueTypeFonts="1"', pres, count=1)
    if 'saveSubsetFonts="1"' in pres:
        pres = pres.replace('saveSubsetFonts="1"', 'saveSubsetFonts="0"', 1)
    elif "saveSubsetFonts" not in pres:
        pres = re.sub(r'(<p:presentation\b)', r'\1 saveSubsetFonts="0"', pres, count=1)
    # embeddedFontLst must precede defaultTextStyle / follow notesSz per schema
    if "<p:defaultTextStyle" in pres:
        pres = pres.replace("<p:defaultTextStyle", efl + "<p:defaultTextStyle", 1)
    elif "</p:notesSz>" in pres:
        pres = pres.replace("</p:notesSz>", "</p:notesSz>" + efl, 1)
    else:
        pres = pres.replace("</p:presentation>", efl + "</p:presentation>", 1)

    patched = {"[Content_Types].xml": ct, "ppt/presentation.xml": pres,
               "ppt/_rels/presentation.xml.rels": rels}
    zout = zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED)
    for item in zin.infolist():
        data = patched.get(item.filename)
        zout.writestr(item, data.encode("utf-8") if data is not None else zin.read(item.filename))
    zin.close()
    for arc, path in font_parts:
        with open(path, "rb") as f:
            zout.writestr(arc, f.read())
    zout.close()
    print("embedded %d font parts -> %s" % (len(font_parts), out))

if __name__ == "__main__":
    main()
