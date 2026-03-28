# Portfolio Evaluation README

## Deliverable 2: Typographic Justification
I chose **Merriweather** (Serif) for the Display font and **Roboto** (Sans-Serif) for the Body font. 
The impression I want to make is one of academic rigor paired with modern software engineering utility. Merriweather is a highly legible, slightly formal serif that conveys authority, history, and reliability—perfect for structured headings. Roboto is a clean, geometric sans-serif designed specifically for digital screens, ensuring maximum legibility for dense text blocks and technical explanations. The contrast between the formal serif headings and pragmatic sans-serif body mimics the relationship between theory (architecture) and execution (code).

## Deliverable 3: Animation Justifications
1. **Hero Staggered Entrance:** The staggering (Hello -> Subtitle -> Button) guides the user's eye hierarchically down the page. It communicates the order of importance and confirms the page has loaded dynamically without overwhelming the user instantly.
2. **Scroll Intersection (Fade Up):** This reduces initial cognitive load. Rather than presenting a wall of text immediately, sections "arrive" as the user requests them by scrolling, making the reading experience feel guided, modular, and responsive to user intent.
3. **Button Micro-interaction (cubic-bezier):** I used `cubic-bezier(0.175, 0.885, 0.32, 1.275)` (a 'backOut' curve). This makes the button scale up slightly past its final size and snap back when hovered. This subtle elasticity mimics physical objects, confirming to the user that the element is an interactive touchpoint.

## Deliverable 5: Accessibility & Best Practices
* **Keyboard Navigation:** Focus outline suppression (`outline: none`) was intentionally avoided. Instead, `:focus-visible` is implemented using a high-contrast `box-shadow` to ensure tab-navigation is crystal clear.
* **ARIA Usage:**
  * `aria-labelledby` connects section tags to their header tags for screen readers.
  * `aria-expanded` and `aria-controls` are dynamically toggled in the JS timeline to announce state changes.
  * `aria-hidden="true"` is used on purely decorative elements like the theme toggle icon and the typing cursor so screen readers don't read out "|" or "🌓".
  * `aria-live="polite"` is attached to form error spans and the success message so screen readers announce form validation changes without interrupting the user mid-keystroke.
* **Lighthouse Scores:** (Attach your screenshots here showing ≥ 85 Accessibility and ≥ 80 SEO).
