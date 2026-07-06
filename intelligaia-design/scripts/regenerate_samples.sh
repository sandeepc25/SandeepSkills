#!/usr/bin/env bash
# Regenerate finished samples in ../samples/ from v2 example sources.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
EXAMPLES="$ROOT/examples"
SAMPLES="$ROOT/samples"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

echo "→ Web sample (from examples/web-page/)"
sed \
  -e 's|href="../../styles.css"|href="../styles.css"|g' \
  -e 's|src="../../assets/|src="../assets/|g' \
  "$EXAMPLES/web-page/Capability Web Page.html" \
  > "$SAMPLES/Intelligaia-web-sample.html"

echo "→ Document PDF (from examples/document/)"
if [[ ! -x "$CHROME" ]]; then
  echo "Chrome not found at $CHROME — set CHROME to your browser binary." >&2
  exit 1
fi
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$SAMPLES/Intelligaia-document-sample.pdf" \
  "file://$EXAMPLES/document/Case%20Study%20Document.html"

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
