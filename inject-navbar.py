#!/usr/bin/env python3
"""
Injects the navbar <style>, <header>, and <script> blocks from navbar.html
into every .astro page under src/pages/.

Rules:
- <style> block → inserted just before </head>
- <header> block → inserted just after <body ...>
- <script> block → inserted just before </body>
- Active page link: adds style="color:#4a9fa5" to the nav link matching the page URL
"""

import os
import re

PAGES_DIR = "/home/ubuntu/h808-astro/src/pages"

# ── Extract blocks from navbar.html ──────────────────────────────────────────
with open("/home/ubuntu/upload/navbar.html", "r") as f:
    raw = f.read()

# Style block (everything between first <style> and </style>)
style_match = re.search(r'(<style>.*?</style>)', raw, re.DOTALL)
STYLE_BLOCK = style_match.group(1) if style_match else ""

# Header block (everything between <header and </header>)
header_match = re.search(r'(<header\b.*?</header>)', raw, re.DOTALL)
HEADER_BLOCK = header_match.group(1) if header_match else ""

# Script block (everything between <script> and </script>)
script_match = re.search(r'(<script>.*?</script>)', raw, re.DOTALL)
SCRIPT_BLOCK = script_match.group(1) if script_match else ""

print(f"Style block: {len(STYLE_BLOCK)} chars")
print(f"Header block: {len(HEADER_BLOCK)} chars")
print(f"Script block: {len(SCRIPT_BLOCK)} chars")

# ── Page URL → active link href mapping ──────────────────────────────────────
# Maps the page's URL path to the href that should be highlighted
PAGE_URL_MAP = {
    "/": None,  # home — no nav link is "active" (logo only)
    "/about": "/about",
    "/blog": "/blog",
    "/contact": "/contact",
    "/services": "/services",
    "/services/interior-painting": "/services/interior-painting",
    "/services/exterior-painting": "/services/exterior-painting",
    "/services/residential-painting": "/services/residential-painting",
    "/services/commercial-painting": "/services/commercial-painting",
    "/services/cabinet-painting": "/services/cabinet-painting",
    "/services/drywall": "/services/drywall",
    "/service-areas": "/service-areas",
    "/painters-honolulu-hi": "/painters-honolulu-hi",
    "/painters-hawaii-kai-hi": "/painters-hawaii-kai-hi",
    "/painters-kahala-diamond-head-hi": "/painters-kahala-diamond-head-hi",
    "/painters-kailua-hi": "/painters-kailua-hi",
    "/painters-kaneohe-hi": "/painters-kaneohe-hi",
    "/painters-pearl-city-hi": "/painters-pearl-city-hi",
    "/painters-kapolei-hi": "/painters-kapolei-hi",
    "/painters-ewa-beach-hi": "/painters-ewa-beach-hi",
    "/painters-north-shore-hi": "/painters-north-shore-hi",
    "/painters-mililani-hi": "/painters-mililani-hi",
    "/painters-waipahu-hi": "/painters-waipahu-hi",
    "/interior-painting-honolulu": None,
    "/privacy-policy": None,
    "/terms": None,
}

def get_page_url(filepath):
    """Derive the URL path from the .astro file path."""
    rel = os.path.relpath(filepath, PAGES_DIR)
    # Remove .astro extension
    rel = rel.replace(".astro", "")
    # index.astro → /
    if rel == "index":
        return "/"
    # foo/index → /foo
    if rel.endswith("/index"):
        rel = rel[:-6]
    # Dynamic pages like [slug] → skip active link
    if "[" in rel:
        return None
    return "/" + rel.replace(os.sep, "/")

def make_active_header(header_html, active_href):
    """Add style='color:#4a9fa5' to the nav link matching active_href."""
    if not active_href:
        return header_html
    # Match <a href="/the/path" class="..."> and add inline style
    # We need to handle both hp808-dropdown-item, hp808-nav-link, hp808-dropdown-header
    def add_active(m):
        full = m.group(0)
        href = m.group(1)
        if href == active_href:
            # Insert style before the closing >
            if 'style=' in full:
                return full  # already has style, skip
            return full.rstrip('>') + ' style="color:#4a9fa5">'
        return full
    result = re.sub(r'<a\s+href="([^"]+)"([^>]*)>', 
                    lambda m: add_active_link(m, active_href), 
                    header_html)
    return result

def add_active_link(m, active_href):
    full = m.group(0)
    href = m.group(1)
    if href == active_href and 'style=' not in full:
        # Insert style attribute
        return re.sub(r'>$', ' style="color:#4a9fa5">', full)
    return full

def inject_navbar(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    # Skip if already injected
    if 'hp808-nav' in content:
        print(f"  SKIP (already injected): {filepath}")
        return

    page_url = get_page_url(filepath)
    active_href = PAGE_URL_MAP.get(page_url) if page_url else None
    header_html = make_active_header(HEADER_BLOCK, active_href)

    # 1. Insert <style> before </head>
    if '</head>' in content:
        content = content.replace('</head>', f'\n{STYLE_BLOCK}\n</head>', 1)
    
    # 2. Insert <header> right after <body ...>
    body_match = re.search(r'(<body[^>]*>)', content)
    if body_match:
        body_tag = body_match.group(1)
        content = content.replace(body_tag, f'{body_tag}\n{header_html}\n', 1)
    
    # 3. Insert <script> before </body>
    if '</body>' in content:
        content = content.replace('</body>', f'\n{SCRIPT_BLOCK}\n</body>', 1)

    with open(filepath, "w") as f:
        f.write(content)
    print(f"  OK: {filepath} (active: {active_href})")

# ── Walk all .astro pages ─────────────────────────────────────────────────────
count = 0
for root, dirs, files in os.walk(PAGES_DIR):
    for fname in files:
        if fname.endswith(".astro"):
            inject_navbar(os.path.join(root, fname))
            count += 1

print(f"\nDone. Processed {count} .astro files.")
