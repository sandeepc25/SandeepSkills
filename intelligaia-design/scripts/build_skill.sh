#!/usr/bin/env bash
# Build intelligaia-design.skill for Claude import.
# Must recreate the zip from scratch — updating an existing archive leaves stale paths.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/intelligaia-design.skill"

cd "$ROOT"
rm -f "$OUT"
zip -r "$OUT" . \
  -x "*.DS_Store" \
  -x "samples/*" \
  -x ".venv/*" \
  -x "examples/node_modules/*" \
  -x "intelligaia-design.skill"

COUNT="$(unzip -l "$OUT" | grep -c 'SKILL\.md$' || true)"
if [[ "$COUNT" != "1" ]]; then
  echo "error: expected exactly 1 SKILL.md in archive, found $COUNT" >&2
  unzip -l "$OUT" | grep 'SKILL\.md' >&2 || true
  exit 1
fi

echo "built $OUT ($(du -h "$OUT" | cut -f1), 1 SKILL.md)"
