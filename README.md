# Loose Frames Studio

Plain HTML/CSS/JS. No build step. Open index.html or run `python3 -m http.server`.

Swap in your content:
- images/logo.svg — white logo (header uses a difference blend)
- images/hero-weddings.jpg, images/hero-street.jpg — heroes, 2000px on the long edge
- images/wedding-01.jpg … wedding-40.jpg — mix of portrait (1333×2000) and landscape (2000×1333)
- images/street-01.jpg … street-40.jpg — landscape only (2000×1333)
- images/about.jpg — about-page portrait (1333×2000)
- Search the HTML for "YOURNAME.pic-time.com", "yourhandle", "YOUR_FORM_ID" (Formspree) and replace.

Deploy: push to GitHub, connect GitHub Pages or Cloudflare Pages (no build command, output dir = root).
