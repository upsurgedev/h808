#!/usr/bin/env python3
"""
Fix the navbar dropdown gap issue.
The dropdown has top: calc(100% + 0.75rem) which creates a gap that
triggers mouseleave before the user reaches the menu.
Fix: change top to 100% and add padding-top to the menu so the visual
gap is preserved but the hover area is continuous.
Also add a ::before pseudo-element bridge for extra safety.
"""
import os
import re

pages_dir = '/home/ubuntu/h808-astro/src/pages'

OLD_CSS = 'top: calc(100% + 0.75rem);'
NEW_CSS = 'top: 100%; padding-top: 0.75rem;'

# Also add a ::before bridge after the .hp808-dropdown-menu rule
BRIDGE_FIND = '.hp808-dropdown-menu.open { display: block; }'
BRIDGE_REPLACE = '''.hp808-dropdown-menu.open { display: block; }

  /* Invisible bridge fills the gap so mouseleave never fires mid-hover */
  .hp808-dropdown::before {
    content: '';
    position: absolute;
    top: 100%;
    left: -1rem;
    right: -1rem;
    height: 0.75rem;
    background: transparent;
  }'''

fixed = 0
for root, dirs, files in os.walk(pages_dir):
    for fname in files:
        if not fname.endswith('.astro'):
            continue
        fpath = os.path.join(root, fname)
        with open(fpath, 'r') as f:
            content = f.read()
        
        if OLD_CSS not in content:
            continue
        
        new_content = content.replace(OLD_CSS, NEW_CSS)
        new_content = new_content.replace(BRIDGE_FIND, BRIDGE_REPLACE)
        
        with open(fpath, 'w') as f:
            f.write(new_content)
        fixed += 1
        print(f'Fixed: {fpath}')

print(f'\nTotal files fixed: {fixed}')
