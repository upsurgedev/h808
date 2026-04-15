#!/usr/bin/env python3
"""Inject the floating Call Now / Get Free Quote button into all Astro pages."""
import os

pages_dir = '/home/ubuntu/h808-astro/src/pages'

FLOATING_BTN = '''
  <!-- Floating Quote Button -->
  <div id="floating-quote" style="
    position: fixed;
    bottom: 2rem;
    right: 1.5rem;
    z-index: 50;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    opacity: 0;
    transform: translateY(1.5rem);
    pointer-events: none;
    transition: opacity 0.5s, transform 0.5s;
  ">
    <a href="tel:8082723816" style="
      display: flex;
      align-items: center;
      gap: 0.625rem;
      background: white;
      color: #4a9fa5;
      border: 2px solid #4a9fa5;
      font-weight: 700;
      font-size: 0.875rem;
      padding: 0.875rem 1.25rem;
      border-radius: 9999px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.15);
      text-decoration: none;
      white-space: nowrap;
      transition: background 0.2s;
    " onmouseover="this.style.background=\'#f9f9f9\'" onmouseout="this.style.background=\'white\'">
      <i class="ri-phone-fill"></i> Call Now
    </a>
    <a href="/contact" style="
      display: flex;
      align-items: center;
      gap: 0.625rem;
      background: #4a9fa5;
      color: white;
      font-weight: 700;
      font-size: 0.875rem;
      padding: 0.875rem 1.25rem;
      border-radius: 9999px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.15);
      text-decoration: none;
      white-space: nowrap;
      transition: background 0.2s;
    " onmouseover="this.style.background=\'#3d8a8f\'" onmouseout="this.style.background=\'#4a9fa5\'">
      <i class="ri-file-list-3-line"></i> Get Free Quote
    </a>
  </div>

  <script>
    (function() {
      var btn = document.getElementById('floating-quote');
      window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
          btn.style.opacity = '1';
          btn.style.transform = 'translateY(0)';
          btn.style.pointerEvents = 'auto';
        } else {
          btn.style.opacity = '0';
          btn.style.transform = 'translateY(1.5rem)';
          btn.style.pointerEvents = 'none';
        }
      }, { passive: true });
    })();
  </script>
</body>'''

updated = 0
for root, dirs, files in os.walk(pages_dir):
    for fname in files:
        if not fname.endswith('.astro'):
            continue
        fpath = os.path.join(root, fname)
        with open(fpath, 'r') as f:
            content = f.read()
        # Skip if already injected
        if 'floating-quote' in content:
            print(f'Already has floating btn: {fpath}')
            continue
        if '</body>' not in content:
            print(f'No </body> found: {fpath}')
            continue
        # Insert just before </body>
        new_content = content.replace('</body>', FLOATING_BTN, 1)
        with open(fpath, 'w') as f:
            f.write(new_content)
        updated += 1
        print(f'Injected: {fpath}')

print(f'\nTotal pages updated: {updated}')
