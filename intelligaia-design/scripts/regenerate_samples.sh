#!/usr/bin/env bash
# Regenerate finished samples in ../samples/ from v2 example sources.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
EXAMPLES="$ROOT/examples"
SAMPLES="$ROOT/samples"

echo "→ Web sample (from examples/web-page/)"
sed \
  -e 's|href="../../styles.css"|href="../styles.css"|g' \
  -e 's|src="../../assets/|src="../assets/|g' \
  "$EXAMPLES/web-page/Capability Web Page.html" \
  > "$SAMPLES/Intelligaia-web-sample.html"

echo "→ Document PDF (from examples/document/ — WeasyPrint)"
PDF_SRC="$EXAMPLES/document/Case Study Document.html"
PDF_OUT="$SAMPLES/Intelligaia-document-sample.pdf"
VENV_PYTHON="$ROOT/.venv/bin/python"
if [[ -x "$VENV_PYTHON" ]]; then
  "$VENV_PYTHON" "$ROOT/scripts/render_pdf.py" "$PDF_SRC" "$PDF_OUT"
else
  if ! python3 -c "import weasyprint" 2>/dev/null; then
    echo "WeasyPrint not found. Creating venv and installing…" >&2
    python3 -m venv "$ROOT/.venv"
    "$ROOT/.venv/bin/pip" install -q weasyprint
    VENV_PYTHON="$ROOT/.venv/bin/python"
  else
    VENV_PYTHON="python3"
  fi
  "$VENV_PYTHON" "$ROOT/scripts/render_pdf.py" "$PDF_SRC" "$PDF_OUT"
fi

echo "→ Deck PPTX (from examples/build_deck.js)"
cd "$EXAMPLES"
if [[ ! -d node_modules/pptxgenjs ]]; then
  npm install pptxgenjs --no-save
fi
node build_deck.js
python3 "$ROOT/scripts/embed_pptx_fonts.py" \
  Intelligaia-sample-v2.pptx \
  "$SAMPLES/Intelligaia-deck-sample.pptx"
rm -f Intelligaia-sample-v2.pptx

echo "Done. Samples written to $SAMPLES/"
ls -la "$SAMPLES"
