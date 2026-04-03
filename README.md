# Introduction to Software Systems: Assignment 2
**Name:** Navneet Nair
**Roll Number:** 2025101016
**Live URL:** https://web.iiit.ac.in/~navneet.nair/

## JavaScript Features (Deliverable 4)
**Group A Feature: A2 - Session-Persistent Reading Progress**
I implemented a reading progress tracker on the About page that calculates the user's scroll depth as a percentage of the document height and updates a fixed progress bar. 
The absolute scroll value is continually saved to `sessionStorage`. To ensure modularity, this logic is isolated in an ES module (`reading-progress.js`) using `export`/`import`. 
If a user reloads or navigates back to the page within the same session, a floating DOM element prompts them to resume; clicking it triggers a smooth `window.scrollTo()` back to their exact previous location.

**Group B Feature: B2 - Collapsible Timeline with Event Delegation**
Instead of attaching individual click listeners to every milestone in the timeline, I attached a single event listener to the parent `<ul>` container. 
Using event delegation, the script captures clicks, checks if the target was a header button, and toggles the `max-height` and `aria-expanded` attributes of the adjacent content pane. This is significantly more memory-efficient.

## Typographic Justification (Deliverable 2)
I chose a "Historic" Theme for Light mode and a "Cyberpunk" Theme for Dark mode. For the Historic (Light) theme, I paired **Pirata One** (Display) with **New Rocker** (Body) to evoke an older, manuscript kind of aesthetic. For the Cyberpunk (Dark) theme, I switched to **Pixelify Sans** (Display) and **Gugi** (Body). This provides a stark contrast, mimicking a retro-arcade or high-end hacker terminal. The monospace/pixelated display fonts give off a strongly digital aesthetic, while the sans-serif body keeps high-contrast neon text readable.

## Animation Justifications (Deliverable 3)
1. **Hero Staggered Entrance:** The staggering (Hello -> Subtitle -> Buttons) guides the user's eye hierarchically down the page. It communicates the order of importance and confirms the page has loaded dynamically without overwhelming the user instantly.
2. **Scroll Intersection (Timeline Slide-in):** Sections "arrive" as the user requests them by scrolling. This reduces initial cognitive load and makes the reading experience feel guided and responsive to user intent.
3. **Button Micro-interaction (Hover State):** I used a custom `cubic-bezier(0.68, -0.55, 0.265, 1.55)` easing curve. This makes the button's background and border transitions feel slightly elastic and snappy,3. **Button Micro-interaction (Hover State):** I used a custom `cubic-bezier(0.68, -0.55, 0.265, 1.55)` easing curve. This makes the button's background and border transitions feel confirming to the user that the element is an interactive touchpoint rather than static text.

## Deliverable 5: Screenshots
*Screenshots are located in the `/images/` directory.*
* [HTML Validation for Home Page (Zero Errors)](images/W3C-home.jpg)
* [HTML Validation for About Page (Zero Errors)](images/W3C-about.jpg)
* [HTML Validation for Projects Page (Zero Errors)](images/W3C-projects.jpg)
* [HTML Validation for Contact Page (Zero Errors)](images/W3C-contact.jpg)
* [Lighthouse Audit (≥ 85)](images/Lighthouse.jpg)
* [WCAG Contrast Check (Light Theme)](images/WCAG-light.jpg)
* [WCAG Contrast Check (Dark Theme)](images/WCAG-dark.jpg)
