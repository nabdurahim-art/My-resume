# Nshimiyimana Abdurahim — New Personal Portfolio

This version redesigns the old `My-resume` portfolio to follow the visual structure of the reference screenshots:

- Dark background
- Pink accent color
- Large hero section
- About section
- Services cards
- Education / experience resume tabs
- Skills section
- Projects section
- Contact form
- Responsive mobile navigation

## Files

```text
nshimiyimana_portfolio/
├── index.html
├── style.css
├── script.js
├── Nshimiyimana Abdurahim CV.pdf
└── assets/
    ├── tech-job-tracker.png
    └── student-finance-tracker.png
```

## Profile photo

The HTML currently loads the profile photo from the existing public `My-resume` GitHub repository:

`https://raw.githubusercontent.com/nabdurahim-art/My-resume/main/me_2.jpeg`

If you want the site to work completely offline, copy your existing `me_2.jpeg` into this folder and change both profile image URLs in `index.html` to:

```html
<img src="me_2.jpeg" ...>
```

## Run locally

Open the folder in VS Code and use Live Server, or run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Main project links

Tech Job Tracker:
https://github.com/nabdurahim-art/tech-job-tracker

Student Finance Tracker:
https://github.com/nabdurahim-art/student-finance-tracker
