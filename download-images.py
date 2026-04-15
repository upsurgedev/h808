#!/usr/bin/env python3
"""
Downloads all site images from Readdy CDN and saves them to public/images/.
Then replaces all external image URLs in source files with local /images/ paths.
"""

import os
import re
import urllib.request
import urllib.parse
import time

IMAGES_DIR = "/home/ubuntu/h808-astro/public/images"
os.makedirs(IMAGES_DIR, exist_ok=True)

# ── Image download map ────────────────────────────────────────────────────────
# Format: (source_url_or_pattern, local_filename)
# For readdy.ai/api/search-image URLs, we match by seq= parameter
# For direct URLs, we use the full URL

DIRECT_DOWNLOADS = [
    # Home hero (direct URL)
    ("https://public.readdy.ai/ai/img_res/363c9618ad5139bba632b528f1744982.jpg", "hero-home.jpg"),
    # Logo/owner images
    ("https://storage.readdy-site.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/aa9e51d6-4297-44c6-b03b-1aac53c5a83a_white_logo_808.png", "logo-808.png"),
    ("https://storage.readdy-site.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/70a92d63-4fc6-4df7-8a85-7c5ff53fbb09_white_logo_with_text.png", "logo-with-text.png"),
    ("https://storage.readdy-site.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/f6ced8a9-9ddb-4246-99c1-bbd7f2cd866e_lo_hat_brush.png", "lopaka-hat-brush.png"),
    ("https://storage.readdy-site.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/5e436676-8b2a-464b-9fbb-0636d9f5aa24_white_shirt_lopaka.png", "lopaka-white-shirt.png"),
    ("https://public.readdy.ai/ai/img_res/2f8bc22d42ce8431b056383c8628f60b.jpg", "honolulu-cityscape.jpg"),
    ("https://public.readdy.ai/ai/img_res/b1b131218bde15bab77ff6b570cba0c4.jpg", "cta-home-bg.jpg"),
    ("https://public.readdy.ai/ai/img_res/2a1ea689cc9b9ccc77192d0051f28993.jpg", "interior-painting-result.jpg"),
    ("https://public.readdy.ai/ai/img_res/c91d3b9956468aacdc9d1d000f1fc08f.jpg", "interior-painting-cta.jpg"),
]

# seq= parameter → local filename mapping
SEQ_MAP = {
    # Hero Backgrounds
    "interior-hero-bg-01": "hero-interior.jpg",
    "exterior-hero-bg-01": "hero-exterior.jpg",
    "residential-hero-bg-01": "hero-residential.jpg",
    "commercial-hero-bg-01": "hero-commercial.jpg",
    "cabinet-hero-bg-01": "hero-cabinet.jpg",
    "drywall-hero-bg-01": "hero-drywall.jpg",
    "hnl-hero-interior-v1": "hero-honolulu-interior.jpg",
    "services-hero-main": "hero-services.jpg",
    "about-hero-v1": "hero-about.jpg",
    "blog-hero-bg-v1": "hero-blog.jpg",
    "contact-hero-v1": "hero-contact.jpg",
    "service-areas-hero-v2": "hero-service-areas.jpg",
    # CTA Backgrounds
    "cta-bg-section": "cta-home.jpg",
    "interior-cta-bg-01": "cta-interior.jpg",
    "exterior-cta-bg-01": "cta-exterior.jpg",
    "residential-cta-bg-01": "cta-residential.jpg",
    "commercial-cta-bg-01": "cta-commercial.jpg",
    "cabinet-cta-bg-01": "cta-cabinet.jpg",
    "drywall-cta-bg-01": "cta-drywall.jpg",
    "services-cta-bg": "cta-services.jpg",
    # Area Pages
    "ewa-beach-hero-v1": "area-ewa-beach.jpg",
    "hawaii-kai-hero-v1": "area-hawaii-kai.jpg",
    "honolulu-city-hero-v1": "area-honolulu.jpg",
    "kahala-diamond-head-hero-v1": "area-kahala.jpg",
    "kailua-hero-v2": "area-kailua.jpg",
    "kaneohe-hero-v2": "area-kaneohe.jpg",
    "kapolei-hero-v1": "area-kapolei.jpg",
    "mililani-hero-v1": "area-mililani.jpg",
    "north-shore-hero-v1": "area-north-shore.jpg",
    "pearl-city-hero-v2": "area-pearl-city.jpg",
    "waipahu-hero-v1": "area-waipahu.jpg",
    # Gallery & Inline
    "about-paint-v1": "gallery-about-paint.jpg",
    "hk-gallery-1": "gallery-hk-interior.jpg",
    "hk-gallery-2": "gallery-hk-exterior.jpg",
    "hk-gallery-3": "gallery-hk-cabinet.jpg",
    "kahala-gallery-ext": "gallery-kahala-exterior.jpg",
    "kahala-gallery-int": "gallery-kahala-interior.jpg",
    "kahala-gallery-cab": "gallery-kahala-cabinet.jpg",
    "kahala-gallery-bp": "gallery-kahala-blackpoint.jpg",
    "mililani-hoa-v1": "gallery-mililani-hoa.jpg",
    "north-shore-rental-v1": "gallery-north-shore-rental.jpg",
    "royal-kunia-cta-v1": "gallery-waipahu-royal-kunia.jpg",
    # Service Cards
    "svc-card-interior": "card-interior.jpg",
    "svc-card-exterior": "card-exterior.jpg",
    "svc-card-residential": "card-residential.jpg",
    "svc-card-commercial": "card-commercial.jpg",
    "svc-card-cabinet": "card-cabinet.jpg",
    "svc-card-drywall": "card-drywall.jpg",
    "service-interior-hero": "card-interior-page.jpg",
    "service-exterior-hero": "card-exterior-page.jpg",
    "service-commercial-hero": "card-commercial-page.jpg",
    # Blog Images
    "blog-cost-hawaii-2026-v1": "blog-cost-hawaii.jpg",
    "blog-best-paint-hawaii-v1": "blog-best-paint.jpg",
    "blog-find-painter-oahu-v1": "blog-find-painter.jpg",
    "blog-hero-prep-v1": "blog-surface-prep.jpg",
    "blog-colors-v1": "blog-colors.jpg",
    "blog-interior-humidity-v1": "blog-interior-humidity.jpg",
    "blog-cabinets-v1": "blog-cabinets.jpg",
    "blog-longevity-v1": "blog-longevity.jpg",
    "blog-diy-vs-pro-v1": "blog-diy-vs-pro.jpg",
    "blog-paint-day-v1": "blog-paint-day.jpg",
    "blog-cost-v1": "blog-cost.jpg",
    "blog-maintain-v1": "blog-maintenance.jpg",
    "blog-choose-contractor-v1": "blog-choose-contractor.jpg",
    "blog-cheap-painter-v1": "blog-cheap-painter.jpg",
    "blog-finish-v1": "blog-paint-finish.jpg",
    "blog-cost-hawaii-v1": "blog-cost-hawaii-thumb.jpg",
    # Area Hub Cards
    "hub-honolulu-v1": "hub-honolulu.jpg",
    "hub-kailua-v1": "hub-kailua.jpg",
    "hub-kaneohe-v1": "hub-kaneohe.jpg",
    "hub-pearl-city-v1": "hub-pearl-city.jpg",
    "hub-kapolei-v1": "hub-kapolei.jpg",
    "hub-ewa-beach-v1": "hub-ewa-beach.jpg",
    "hub-mililani-v1": "hub-mililani.jpg",
    "hub-waipahu-v1": "hub-waipahu.jpg",
    "hub-wahiawa-v1": "hub-wahiawa.jpg",
    "hub-waianae-v1": "hub-waianae.jpg",
    "hub-kahala-v1": "hub-kahala.jpg",
    "hub-hawaii-kai-v1": "hub-hawaii-kai.jpg",
    "hub-makaha-v1": "hub-makaha.jpg",
    "hub-north-shore-v1": "hub-north-shore.jpg",
    # Mock Data Areas
    "area-honolulu": "mock-honolulu.jpg",
    "area-pearl-city": "mock-pearl-city.jpg",
    "area-kaneohe": "mock-kaneohe.jpg",
    "area-kailua": "mock-kailua.jpg",
    "area-hawaii-kai": "mock-hawaii-kai.jpg",
    "area-kahala": "mock-kahala.jpg",
    "area-waipahu": "mock-waipahu.jpg",
    "area-mililani": "mock-mililani.jpg",
    "area-north-shore": "mock-north-shore.jpg",
    "area-wahiawa": "mock-wahiawa.jpg",
    "area-kapolei": "mock-kapolei.jpg",
    "area-ewa-beach": "mock-ewa-beach.jpg",
    "area-waianae": "mock-waianae.jpg",
    "area-makaha": "mock-makaha.jpg",
}

def download_file(url, dest_path):
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 5000:
        print(f"  SKIP (exists): {os.path.basename(dest_path)}")
        return True
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        if len(data) < 1000:
            print(f"  WARN (too small {len(data)}b): {os.path.basename(dest_path)}")
            return False
        with open(dest_path, 'wb') as f:
            f.write(data)
        print(f"  OK ({len(data)//1024}KB): {os.path.basename(dest_path)}")
        return True
    except Exception as e:
        print(f"  ERROR: {os.path.basename(dest_path)} — {e}")
        return False

# ── Step 1: Download direct URL images ───────────────────────────────────────
print("\n=== Downloading direct URL images ===")
for url, filename in DIRECT_DOWNLOADS:
    dest = os.path.join(IMAGES_DIR, filename)
    download_file(url, dest)
    time.sleep(0.1)

# ── Step 2: Download seq= images by fetching the image library page ──────────
# We need to get the actual URLs from the image library page
# The URLs are in the format: readdy.ai/api/search-image?query=...&seq=SEQID&...
# We'll construct them from the seq IDs we know

print("\n=== Downloading seq= images ===")
# We need to get the actual full URLs - let's read them from the source files
source_dirs = [
    "/home/ubuntu/h808-astro/src/react-pages",
    "/home/ubuntu/h808-astro/src/react-components",
    "/home/ubuntu/h808-astro/src/mocks",
]

# Collect all readdy.ai search-image URLs from source files
all_readdy_urls = {}
for src_dir in source_dirs:
    for root, dirs, files in os.walk(src_dir):
        for fname in files:
            if fname.endswith(('.tsx', '.ts', '.js')):
                fpath = os.path.join(root, fname)
                with open(fpath, 'r', errors='ignore') as f:
                    content = f.read()
                # Find all readdy.ai/api/search-image URLs
                matches = re.findall(r'https://readdy\.ai/api/search-image\?[^\s"\'`]+', content)
                for m in matches:
                    # Extract seq= parameter
                    seq_match = re.search(r'seq=([^&"\'`\s]+)', m)
                    if seq_match:
                        seq = seq_match.group(1)
                        all_readdy_urls[seq] = m

print(f"Found {len(all_readdy_urls)} unique seq= URLs in source files")

# Download each seq= image
for seq, url in all_readdy_urls.items():
    if seq in SEQ_MAP:
        filename = SEQ_MAP[seq]
        dest = os.path.join(IMAGES_DIR, filename)
        download_file(url, dest)
        time.sleep(0.1)
    else:
        print(f"  UNMAPPED seq: {seq}")

print(f"\nDownload complete. Images in {IMAGES_DIR}:")
imgs = [f for f in os.listdir(IMAGES_DIR) if f.endswith(('.jpg', '.png', '.webp'))]
print(f"  {len(imgs)} image files")
