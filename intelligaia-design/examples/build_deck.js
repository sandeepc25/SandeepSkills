const pptxgen = require("pptxgenjs");
const p = new pptxgen();
p.defineLayout({ name: "W16x9", width: 13.333, height: 7.5 });
p.layout = "W16x9";

// ── brand tokens (v2 — includes new accent families) ──
const YEL = "FFD923", GOLD = "C49A00", INK = "0D0D0A", INK900 = "1A1916",
      INK500 = "6B6B62", INK300 = "AEAE9F", INK100 = "E6E5DC", CREAM = "FAFAF6",
      GRAPHITE = "2A2A24";
const OR = "FF8A3D", BLU = "2E86DE", PUR = "9350C4"; // new accent anchors
const SERIF = "Trirong", SANS = "Raleway", MONO = "Azeret Mono";

const footer = (s, n, dark, withLogo=true) => {
  if (withLogo) {
    const img = dark ? "../assets/intelligaia-logo-wordmark-cream.png" : "../assets/intelligaia-logo-wordmark-ink.png";
    s.addImage({ path: img, x:0.5, y:7.0, w:0.89, h:0.219 });
  }
  s.addText(n, { x:11.83, y:6.95, w:1, h:0.35, fontFace:MONO, fontSize:9,
    color: dark?INK300:INK500, align:"right", valign:"middle" });
};

// ───────────────────── SLIDE 1 — title slide (v2: LIGHT by default) ─────────────────────
let s1 = p.addSlide();
s1.background = { color: CREAM };
s1.addImage({ path:"../assets/intelligaia-logo-full-ink.png", x:0.65, y:0.55, w:2.3, h:0.85 });
s1.addText("CAPABILITY BRIEF", { x:0.7, y:1.7, w:8, h:0.35, fontFace:MONO,
  fontSize:12, color:GOLD, charSpacing:3, align:"left" });
s1.addText(
  [ { text:"From proof-of-concept to ", options:{ color:INK900 } },
    { text:"production-ready.", options:{ color:GOLD, italic:true } } ],
  { x:0.65, y:2.15, w:11.4, h:2.1, fontFace:SERIF, fontSize:46, lineSpacingMultiple:1.0, align:"left" }
);
s1.addText(
  "Intelligaia is an AI-centred design and engineering firm. We take AI proofs-of-concept to production-ready solutions — owning the complete outcome from first Workshop to final deployment.",
  { x:0.7, y:4.4, w:8.4, h:1.4, fontFace:SANS, fontSize:16, color:INK500, lineSpacingMultiple:1.3, align:"left" }
);
footer(s1, "01", false, false);

// NOTE: for a deliberately dramatic opener (keynote/launch), swap to the dark variant:
// s1.background = { color: INK }; text colors CREAM/YEL/INK300; faint yellow hex outlines top-right.
// Do not default to this — only use when explicitly requested.

// ──────────────────────── SLIDE 2 — light content (unchanged pattern) ───────────────────
let s2 = p.addSlide();
s2.background = { color: CREAM };
s2.addText("HOW WE WORK", { x:0.6, y:0.45, w:8, h:0.3, fontFace:MONO, fontSize:11,
  color:GOLD, charSpacing:3 });
s2.addText("Three stages. One outcome.", { x:0.55, y:0.75, w:12.2, h:0.9,
  fontFace:SERIF, fontSize:34, color:INK, align:"left" });
s2.addText("Most firms deliver a technical build. We own the outcome — design and engineering working together so what ships actually gets used.",
  { x:0.6, y:1.75, w:6.4, h:0.9, fontFace:SANS, fontSize:14, color:INK900, lineSpacingMultiple:1.3 });

const bullets = [
  "UX/UI design and scalable design systems.",
  "AI POC development — multi-agent, RAG, LLM integration.",
  "Front-end & full-stack engineering at enterprise scale.",
  "Discovery workshops and roadmap definition.",
];
const by0 = 2.95, step = 0.62;
bullets.forEach((b,i)=>{
  s2.addShape(p.ShapeType.hexagon, { x:0.62, y:by0 + i*step + 0.07, w:0.16, h:0.15,
    fill:{ color:YEL }, line:{ type:"none" }, rotate:90 });
  s2.addText(b, { x:0.95, y:by0 + i*step - 0.04, w:5.9, h:0.5, fontFace:SANS,
    fontSize:13, color:INK900, valign:"middle", lineSpacingMultiple:1.05 });
});

const hdr = (t)=>({ text:t, options:{ fontFace:MONO, fontSize:8.5, color:INK500,
  bold:false, charSpacing:1, fill:{ color:CREAM }, valign:"middle",
  border:[{type:"none"},{type:"none"},{pt:1.5,color:INK900},{type:"none"}] } });
const cell = (t,first)=>({ text:t, options:{ fontFace:SANS, fontSize:11,
  color: first?INK:INK900, bold:!!first, valign:"middle",
  border:[{type:"none"},{type:"none"},{pt:0.5,color:INK100},{type:"none"}] } });
s2.addTable([
  [hdr("STAGE"), hdr("WHAT IT IS"), hdr("LENGTH")],
  [cell("Workshops",1), cell("Discovery, AI mapping, roadmap"), cell("1–3 wks")],
  [cell("Labs",1), cell("Proof-of-concept & prototype builds"), cell("8–12 wks")],
  [cell("Studio",1), cell("End-to-end design & engineering"), cell("Ongoing")],
], { x:7.2, y:1.75, w:5.55, colW:[1.5,2.95,1.1], rowH:[0.4,0.62,0.62,0.62],
     align:"left", valign:"middle" });

s2.addShape(p.ShapeType.roundRect, { x:0.6, y:5.55, w:12.15, h:1.15,
  fill:{ color:INK }, line:{ type:"none" }, rectRadius:0.08 });
s2.addText("3×", { x:0.85, y:5.55, w:1.7, h:1.15, fontFace:SERIF, italic:true,
  fontSize:48, color:YEL, align:"left", valign:"middle" });
s2.addText(
  [ { text:"OUTCOME\n", options:{ fontFace:MONO, fontSize:9, color:YEL, charSpacing:2 } },
    { text:"faster deal-cycle time after modernising a global enterprise commerce platform with a micro-frontend architecture.",
      options:{ fontFace:SANS, fontSize:12, color:INK300 } } ],
  { x:2.65, y:5.55, w:9.9, h:1.15, valign:"middle", lineSpacingMultiple:1.15, align:"left" }
);
footer(s2, "02", false);

p.writeFile({ fileName: "Intelligaia-sample-v2.pptx" }).then(f => console.log("wrote", f));
