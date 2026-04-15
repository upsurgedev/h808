#!/usr/bin/env python3
"""
Replaces all external Readdy image URLs in source files with local /images/ paths.
Uses seq= parameter matching for readdy.ai/api/search-image URLs.
Uses direct URL matching for public.readdy.ai and storage.readdy-site.link URLs.
"""

import os
import re

# ── seq= → local path mapping ─────────────────────────────────────────────────
SEQ_MAP = {
    "interior-hero-bg-01": "/images/hero-interior.jpg",
    "exterior-hero-bg-01": "/images/hero-exterior.jpg",
    "residential-hero-bg-01": "/images/hero-residential.jpg",
    "commercial-hero-bg-01": "/images/hero-commercial.jpg",
    "cabinet-hero-bg-01": "/images/hero-cabinet.jpg",
    "drywall-hero-bg-01": "/images/hero-drywall.jpg",
    "hnl-hero-interior-v1": "/images/hero-honolulu-interior.jpg",
    "services-hero-main": "/images/hero-services.jpg",
    "about-hero-v1": "/images/hero-about.jpg",
    "blog-hero-bg-v1": "/images/hero-blog.jpg",
    "contact-hero-v1": "/images/hero-contact.jpg",
    "service-areas-hero-v2": "/images/hero-service-areas.jpg",
    "cta-bg-section": "/images/cta-home.jpg",
    "interior-cta-bg-01": "/images/cta-interior.jpg",
    "exterior-cta-bg-01": "/images/cta-exterior.jpg",
    "residential-cta-bg-01": "/images/cta-residential.jpg",
    "commercial-cta-bg-01": "/images/cta-commercial.jpg",
    "cabinet-cta-bg-01": "/images/cta-cabinet.jpg",
    "drywall-cta-bg-01": "/images/cta-drywall.jpg",
    "services-cta-bg": "/images/cta-services.jpg",
    "ewa-beach-hero-v1": "/images/area-ewa-beach.jpg",
    "hawaii-kai-hero-v1": "/images/area-hawaii-kai.jpg",
    "honolulu-city-hero-v1": "/images/area-honolulu.jpg",
    "kahala-diamond-head-hero-v1": "/images/area-kahala.jpg",
    "kailua-hero-v2": "/images/area-kailua.jpg",
    "kaneohe-hero-v2": "/images/area-kaneohe.jpg",
    "kapolei-hero-v1": "/images/area-kapolei.jpg",
    "mililani-hero-v1": "/images/area-mililani.jpg",
    "north-shore-hero-v1": "/images/area-north-shore.jpg",
    "pearl-city-hero-v2": "/images/area-pearl-city.jpg",
    "waipahu-hero-v1": "/images/area-waipahu.jpg",
    "about-paint-v1": "/images/gallery-about-paint.jpg",
    "hk-gallery-1": "/images/gallery-hk-interior.jpg",
    "hk-gallery-2": "/images/gallery-hk-exterior.jpg",
    "hk-gallery-3": "/images/gallery-hk-cabinet.jpg",
    "kahala-gallery-ext": "/images/gallery-kahala-exterior.jpg",
    "kahala-gallery-int": "/images/gallery-kahala-interior.jpg",
    "kahala-gallery-cab": "/images/gallery-kahala-cabinet.jpg",
    "kahala-gallery-bp": "/images/gallery-kahala-blackpoint.jpg",
    "mililani-hoa-v1": "/images/gallery-mililani-hoa.jpg",
    "north-shore-rental-v1": "/images/gallery-north-shore-rental.jpg",
    "royal-kunia-cta-v1": "/images/gallery-waipahu-royal-kunia.jpg",
    "svc-card-interior": "/images/card-interior.jpg",
    "svc-card-exterior": "/images/card-exterior.jpg",
    "svc-card-residential": "/images/card-residential.jpg",
    "svc-card-commercial": "/images/card-commercial.jpg",
    "svc-card-cabinet": "/images/card-cabinet.jpg",
    "svc-card-drywall": "/images/card-drywall.jpg",
    "service-interior-hero": "/images/card-interior-page.jpg",
    "service-exterior-hero": "/images/card-exterior-page.jpg",
    "service-commercial-hero": "/images/card-commercial-page.jpg",
    "blog-cost-hawaii-2026-v1": "/images/blog-cost-hawaii.jpg",
    "blog-best-paint-hawaii-v1": "/images/blog-best-paint.jpg",
    "blog-find-painter-oahu-v1": "/images/blog-find-painter.jpg",
    "blog-hero-prep-v1": "/images/blog-surface-prep.jpg",
    "blog-colors-v1": "/images/blog-colors.jpg",
    "blog-interior-humidity-v1": "/images/blog-interior-humidity.jpg",
    "blog-cabinets-v1": "/images/blog-cabinets.jpg",
    "blog-longevity-v1": "/images/blog-longevity.jpg",
    "blog-diy-vs-pro-v1": "/images/blog-diy-vs-pro.jpg",
    "blog-paint-day-v1": "/images/blog-paint-day.jpg",
    "blog-cost-v1": "/images/blog-cost.jpg",
    "blog-maintain-v1": "/images/blog-maintenance.jpg",
    "blog-choose-contractor-v1": "/images/blog-choose-contractor.jpg",
    "blog-cheap-painter-v1": "/images/blog-cheap-painter.jpg",
    "blog-finish-v1": "/images/blog-paint-finish.jpg",
    "blog-cost-hawaii-v1": "/images/blog-cost-hawaii-thumb.jpg",
    "hub-honolulu-v1": "/images/hub-honolulu.jpg",
    "hub-kailua-v1": "/images/hub-kailua.jpg",
    "hub-kaneohe-v1": "/images/hub-kaneohe.jpg",
    "hub-pearl-city-v1": "/images/hub-pearl-city.jpg",
    "hub-kapolei-v1": "/images/hub-kapolei.jpg",
    "hub-ewa-beach-v1": "/images/hub-ewa-beach.jpg",
    "hub-mililani-v1": "/images/hub-mililani.jpg",
    "hub-waipahu-v1": "/images/hub-waipahu.jpg",
    "hub-wahiawa-v1": "/images/hub-wahiawa.jpg",
    "hub-waianae-v1": "/images/hub-waianae.jpg",
    "hub-kahala-v1": "/images/hub-kahala.jpg",
    "hub-hawaii-kai-v1": "/images/hub-hawaii-kai.jpg",
    "hub-makaha-v1": "/images/hub-makaha.jpg",
    "hub-north-shore-v1": "/images/hub-north-shore.jpg",
    "area-honolulu": "/images/mock-honolulu.jpg",
    "area-pearl-city": "/images/mock-pearl-city.jpg",
    "area-kaneohe": "/images/mock-kaneohe.jpg",
    "area-kailua": "/images/mock-kailua.jpg",
    "area-hawaii-kai": "/images/mock-hawaii-kai.jpg",
    "area-kahala": "/images/mock-kahala.jpg",
    "area-waipahu": "/images/mock-waipahu.jpg",
    "area-mililani": "/images/mock-mililani.jpg",
    "area-north-shore": "/images/mock-north-shore.jpg",
    "area-wahiawa": "/images/mock-wahiawa.jpg",
    "area-kapolei": "/images/mock-kapolei.jpg",
    "area-ewa-beach": "/images/mock-ewa-beach.jpg",
    "area-waianae": "/images/mock-waianae.jpg",
    "area-makaha": "/images/mock-makaha.jpg",
}

# ── Direct URL → local path mapping ──────────────────────────────────────────
DIRECT_MAP = {
    "https://public.readdy.ai/ai/img_res/363c9618ad5139bba632b528f1744982.jpg": "/images/hero-home.jpg",
    "https://storage.readdy-site.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/aa9e51d6-4297-44c6-b03b-1aac53c5a83a_white_logo_808.png": "/images/logo-808.png",
    "https://storage.readdy-site.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/70a92d63-4fc6-4df7-8a85-7c5ff53fbb09_white_logo_with_text.png": "/images/logo-with-text.png",
    "https://storage.readdy-site.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/f6ced8a9-9ddb-4246-99c1-bbd7f2cd866e_lo_hat_brush.png": "/images/lopaka-hat-brush.png",
    "https://storage.readdy-site.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/5e436676-8b2a-464b-9fbb-0636d9f5aa24_white_shirt_lopaka.png": "/images/lopaka-white-shirt.png",
    "https://public.readdy.ai/ai/img_res/2f8bc22d42ce8431b056383c8628f60b.jpg": "/images/honolulu-cityscape.jpg",
    "https://public.readdy.ai/ai/img_res/b1b131218bde15bab77ff6b570cba0c4.jpg": "/images/cta-home-bg.jpg",
    "https://public.readdy.ai/ai/img_res/2a1ea689cc9b9ccc77192d0051f28993.jpg": "/images/interior-painting-result.jpg",
    "https://public.readdy.ai/ai/img_res/c91d3b9956468aacdc9d1d000f1fc08f.jpg": "/images/interior-painting-cta.jpg",
}

# Also handle versioned storage URLs (strip ?v=... query string)
STORAGE_PATTERNS = [
    (r'https://storage\.readdy-site\.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/aa9e51d6[^"\'`\s]*', "/images/logo-808.png"),
    (r'https://storage\.readdy-site\.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/70a92d63[^"\'`\s]*', "/images/logo-with-text.png"),
    (r'https://storage\.readdy-site\.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/f6ced8a9[^"\'`\s]*', "/images/lopaka-hat-brush.png"),
    (r'https://storage\.readdy-site\.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/5e436676[^"\'`\s]*', "/images/lopaka-white-shirt.png"),
]

def replace_in_file(fpath):
    with open(fpath, 'r', errors='ignore') as f:
        content = f.read()
    
    original = content
    replacements = 0
    
    # 1. Replace readdy.ai/api/search-image URLs by seq= parameter
    def replace_search_image(m):
        nonlocal replacements
        url = m.group(0)
        seq_match = re.search(r'seq=([^&"\'`\s]+)', url)
        if seq_match:
            seq = seq_match.group(1)
            if seq in SEQ_MAP:
                replacements += 1
                return SEQ_MAP[seq]
        return url  # keep original if not mapped
    
    content = re.sub(
        r'https://readdy\.ai/api/search-image\?[^\s"\'`]+',
        replace_search_image,
        content
    )
    
    # 2. Replace direct public.readdy.ai URLs
    for old_url, new_path in DIRECT_MAP.items():
        if old_url in content:
            content = content.replace(old_url, new_path)
            replacements += 1
    
    # 3. Replace versioned storage.readdy-site.link URLs
    for pattern, new_path in STORAGE_PATTERNS:
        new_content, n = re.subn(pattern, new_path, content)
        if n > 0:
            content = new_content
            replacements += n
    
    if content != original:
        with open(fpath, 'w') as f:
            f.write(content)
        return replacements
    return 0

# ── Walk all source files ─────────────────────────────────────────────────────
SOURCE_DIRS = [
    "/home/ubuntu/h808-astro/src/react-pages",
    "/home/ubuntu/h808-astro/src/react-components",
    "/home/ubuntu/h808-astro/src/mocks",
    "/home/ubuntu/h808-astro/src/pages",
]

total_files = 0
total_replacements = 0
unmapped = set()

for src_dir in SOURCE_DIRS:
    for root, dirs, files in os.walk(src_dir):
        for fname in files:
            if fname.endswith(('.tsx', '.ts', '.js', '.astro')):
                fpath = os.path.join(root, fname)
                n = replace_in_file(fpath)
                if n > 0:
                    print(f"  {n} replacements: {os.path.relpath(fpath, '/home/ubuntu/h808-astro')}")
                    total_files += 1
                    total_replacements += n

print(f"\nDone: {total_replacements} replacements in {total_files} files")

# ── Verify no external URLs remain ───────────────────────────────────────────
print("\n=== Checking for remaining external URLs ===")
remaining = []
for src_dir in SOURCE_DIRS:
    for root, dirs, files in os.walk(src_dir):
        for fname in files:
            if fname.endswith(('.tsx', '.ts', '.js', '.astro')):
                fpath = os.path.join(root, fname)
                with open(fpath, 'r', errors='ignore') as f:
                    content = f.read()
                if 'readdy.ai' in content or 'storage.readdy-site.link' in content:
                    remaining.append(fpath)

if remaining:
    print(f"WARNING: {len(remaining)} files still have external Readdy URLs:")
    for f in remaining:
        print(f"  {os.path.relpath(f, '/home/ubuntu/h808-astro')}")
else:
    print("✓ No external Readdy URLs remain in source files")
