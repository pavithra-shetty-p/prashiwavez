# PrashiWaveZ — Fashion Design Website

A responsive, static website for PrashiWaveZ, an emerging fashion design label. The website introduces the brand, presents its creative direction, and provides a point of contact for enquiries and collaborations.

## Technology

The website uses HTML, CSS, and JavaScript. No build tools or package installation are required.

## Project Structure

- `index.html` — Page structure and website content.
- `styles.css` — Layout, visual styling, and responsive design.
- `script.js` — Contact email configuration and interface interactions.
- `images/` — Brand imagery and logo assets.

## Local Preview

Open `index.html` directly in a browser. Alternatively, with Python 3 installed, run the following command from the project directory:

```sh
python3 -m http.server 8000
```

Then visit [the local preview](http://localhost:8000).

## Content and Configuration

Before publishing the website:

1. Set `businessEmail` in `script.js` to the official business email address and update the fallback email link in `index.html`.
2. Review the brand description, collection concepts, and contact information in `index.html`.
3. Replace concept artwork with approved product photography when available.
4. Remove the email configuration notice from the contact section once the address is configured.
5. Verify that all published content accurately represents the business and its current offerings.

## Project Status

The website currently presents the brand and its collection concepts. Product availability and ordering details have not yet been announced.
