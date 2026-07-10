# SmartCalc — Multi-Page Calculator

SmartCalc is a responsive, multi-page calculator web app built with plain **HTML/CSS/JavaScript**. It includes:

- 📊 **Dashboard** (overview cards + quick links)
- 🧮 **Standard Calculator**
- 🔬 **Scientific Calculator** (trig, logs, factorial, sqrt, powers, π/e, etc.)
- 🔁 **Unit Converter** (length, weight, temperature)
- 🕘 **History Manager** (saved in `localStorage`)
- 🎨 **Settings** (Light/Dark mode)

## Live Usage / Run Instructions

This project doesn’t require any build step.

1. Open `index.html` in your browser.
2. Navigate using the sidebar to access different tools.

> Tip: You can also open other pages directly (e.g. `calculator.html`, `scientific.html`, etc.).

## Project Structure

```text
Smart Calculator/
  index.html
  calculator.html
  scientific.html
  converter.html
  history.html
  settings.html

  css/
    style.css

  js/
    calculator.js
    scientific.js
    converter.js
    history.js
    settings.js
```

## Features by Page

### Dashboard (`index.html`)
- Displays summary cards (example counts are currently hardcoded in the HTML).
- Provides quick navigation buttons to key tools.

### Standard Calculator (`calculator.html`)
- Basic operations: `+  −  ×  ÷` with parentheses-free input via buttons.
- Supports: `AC` (clear), `DEL` (delete last), `%`.
- Keyboard support is included in `js/calculator.js`.
- On calculation, the expression + result are saved to **History**.

### Scientific Calculator (`scientific.html`)
- Expression display: `#sciDisplay`
- Includes buttons for:
  - `√` (sqrt), `x²`, `xʸ` (power)
  - `log`, `ln`
  - `sin`, `cos`, `tan`
  - `n!` (factorial)
  - Constants: `π`, `e`
- Converts display operators for evaluation (replaces `÷ × −` with JS operators).
- Uses `localStorage` to save results into History.

### Unit Converter (`converter.html`)
Converts between:
- Length: **m → km**, **km → m**
- Weight: **g → kg**, **kg → g**
- Temperature: **°C → °F**, **°F → °C**

### History (`history.html`)
- Reads saved calculations from `localStorage` and renders them.
- Includes **Clear History** button.

### Settings (`settings.html`)
- Dark/Light theme toggle.
- Theme is stored in `localStorage` under the key `theme`.
- **Reset Settings** clears theme and reloads the page.

## Storage & Persistence

- **History** is persisted using `localStorage` key: `history`
- **Theme** is persisted using `localStorage` key: `theme`

## Notes (Security)

The calculators use `eval()` to compute expressions.
- This is fine for a closed UI, but **do not** use this approach for untrusted user-generated code in production.

## Credits

SmartCalc — Developed by **Anish Yadav**.

