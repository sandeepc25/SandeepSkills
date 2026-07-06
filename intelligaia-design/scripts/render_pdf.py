#!/usr/bin/env python3
"""Render a WeasyPrint-ready HTML file to PDF."""
import sys
from pathlib import Path

def main():
    if len(sys.argv) < 3:
        sys.exit("usage: render_pdf.py input.html output.pdf")
    src = Path(sys.argv[1]).resolve()
    out = Path(sys.argv[2]).resolve()
    if not src.is_file():
        sys.exit(f"input not found: {src}")
    try:
        from weasyprint import HTML
    except ImportError:
        sys.exit(
            "weasyprint is required. Install with:\n"
            "  python3 -m venv .venv && .venv/bin/pip install weasyprint\n"
            "  .venv/bin/python scripts/render_pdf.py …"
        )
    out.parent.mkdir(parents=True, exist_ok=True)
    HTML(filename=str(src), base_url=str(src.parent)).write_pdf(str(out))
    print(f"wrote {out}")

if __name__ == "__main__":
    main()
