#!/usr/bin/env python3
import re
import os
import glob

# Map seq IDs to local image paths
replacements = {
    # About
    "about-hero-v1": "/images/about-page-hero.jpg",
    "about-paint-v1": "/images/about-paint-closeup.jpg",
    # Blog
    "blog-hero-bg-v1": "/images/blog-page-hero.jpg",
    # Cabinet
    "cabinet-cta-bg-01": "/images/cabinet-cta.jpg",
    "cabinet-hero-bg-01": "/images/cabinet-painting-hero.jpg",
    # Commercial
    "commercial-cta-bg-01": "/images/commercial-cta.jpg",
    "commercial-hero-bg-01": "/images/commercial-painting-hero.jpg",
    # Contact
    "contact-hero-v1": "/images/contact-page-hero.jpg",
    # CTA
    "cta-bg-section": "/images/home-cta.jpg",
    # Drywall
    "drywall-cta-bg-01": "/images/drywall-cta.jpg",
    "drywall-hero-bg-01": "/images/drywall-hero.jpg",
    # Ewa Beach
    "ewa-beach-hero-v1": "/images/ewa-beach-hero.jpg",
    "hub-ewa-beach-v1": "/images/ewa-beach-hub.jpg",
    # Exterior
    "exterior-cta-bg-01": "/images/exterior-cta.jpg",
    "exterior-hero-bg-01": "/images/exterior-painting-hero.jpg",
    # Hawaii Kai
    "hawaii-kai-hero-v1": "/images/hawaii-kai-hero.jpg",
    "hub-hawaii-kai-v1": "/images/hawaii-kai-hub.jpg",
    "hk-gallery-1": "/images/hawaii-kai-interior-gallery.jpg",
    "hk-gallery-2": "/images/hawaii-kai-exterior-gallery.jpg",
    "hk-gallery-3": "/images/hawaii-kai-cabinet-gallery.jpg",
    # Hero
    "hero-bg-v2": "/images/home-hero.jpg",
    # Honolulu interior landing
    "hnl-hero-interior-v1": "/images/honolulu-interior-painting-hero.jpg",
    # Honolulu
    "honolulu-city-hero-v1": "/images/honolulu-hero.jpg",
    "hub-honolulu-v1": "/images/honolulu-hub.jpg",
    # Interior
    "interior-cta-bg-01": "/images/interior-cta.jpg",
    "interior-hero-bg-01": "/images/interior-painting-hero.jpg",
    # Kahala
    "kahala-diamond-head-hero-v1": "/images/kahala-hero.jpg",
    "hub-kahala-v1": "/images/kahala-hub.jpg",
    "kahala-gallery-bp": "/images/kahala-black-point-gallery.jpg",
    "kahala-gallery-cab": "/images/kahala-cabinet-gallery.jpg",
    "kahala-gallery-ext": "/images/kahala-exterior-gallery.jpg",
    "kahala-gallery-int": "/images/kahala-interior-gallery.jpg",
    # Kailua
    "kailua-hero-v2": "/images/kailua-hero.jpg",
    "hub-kailua-v1": "/images/kailua-hub.jpg",
    # Kaneohe
    "kaneohe-hero-v2": "/images/kaneohe-hero.jpg",
    "hub-kaneohe-v1": "/images/kaneohe-hub.jpg",
    # Kapolei
    "kapolei-hero-v1": "/images/kapolei-hero.jpg",
    "hub-kapolei-v1": "/images/kapolei-hub.jpg",
    # Mililani
    "mililani-hero-v1": "/images/mililani-hero.jpg",
    "hub-mililani-v1": "/images/mililani-hub.jpg",
    "mililani-hoa-v1": "/images/mililani-hoa-home.jpg",
    # North Shore
    "north-shore-hero-v1": "/images/north-shore-hero.jpg",
    "hub-north-shore-v1": "/images/north-shore-hub.jpg",
    "north-shore-rental-v1": "/images/north-shore-rental-home.jpg",
    # Pearl City
    "pearl-city-hero-v2": "/images/pearl-city-hero.jpg",
    "hub-pearl-city-v1": "/images/pearl-city-hub.jpg",
    # Residential
    "residential-cta-bg-01": "/images/residential-cta.jpg",
    "residential-hero-bg-01": "/images/residential-painting-hero.jpg",
    # Service areas
    "service-areas-hero-v2": "/images/service-areas-hero.jpg",
    # Services
    "service-commercial-hero": "/images/commercial-painting-hero.jpg",
    "service-exterior-hero": "/images/exterior-painting-hero.jpg",
    "service-interior-hero": "/images/interior-painting-hero.jpg",
    "services-cta-bg": "/images/services-page-cta.jpg",
    "services-hero-main": "/images/services-page-hero.jpg",
    # Service cards
    "svc-card-cabinet": "/images/cabinet-painting-card.jpg",
    "svc-card-commercial": "/images/commercial-painting-card.jpg",
    "svc-card-drywall": "/images/drywall-card.jpg",
    "svc-card-exterior": "/images/exterior-painting-card.jpg",
    "svc-card-interior": "/images/interior-painting-card.jpg",
    "svc-card-residential": "/images/residential-painting-card.jpg",
    # Wahiawa
    "hub-wahiawa-v1": "/images/north-shore-hub.jpg",
    # Waianae
    "hub-waianae-v1": "/images/north-shore-hub.jpg",
    # Waipahu
    "waipahu-hero-v1": "/images/waipahu-hero.jpg",
    "hub-waipahu-v1": "/images/waipahu-hub.jpg",
    "royal-kunia-cta-v1": "/images/waipahu-royal-kunia-home.jpg",
    # Makaha
    "hub-makaha-v1": "/images/north-shore-hub.jpg",
}

def replace_readdy_url(m):
    url = m.group(0)
    seq_match = re.search(r'seq=([^&"\']+)', url)
    if seq_match:
        seq = seq_match.group(1)
        local = replacements.get(seq, "/images/home-hero.jpg")
        return f'"{local}"'
    return m.group(0)

# Find all tsx files in react-pages and react-components
files = (
    glob.glob("src/react-pages/**/*.tsx", recursive=True) +
    glob.glob("src/react-components/**/*.tsx", recursive=True) +
    glob.glob("src/components/feature/*.tsx")
)

total = 0
for filepath in files:
    with open(filepath, "r") as f:
        content = f.read()
    
    new_content = re.sub(r'"https://readdy\.ai/api/search-image[^"]+"', replace_readdy_url, content)
    
    if new_content != content:
        count = content.count("readdy.ai/api/search-image")
        total += count
        with open(filepath, "w") as f:
            f.write(new_content)
        print(f"  Fixed {count} URLs in {filepath}")

print(f"\nTotal: {total} URLs replaced across {len(files)} files checked")
