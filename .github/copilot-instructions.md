## Purpose
This file gives AI coding agents the minimal, high-value context needed to be productive in this repository.

## Big picture
- Single-page React app scaffolded with Create React App. Entry point: [src/index.js](src/index.js#L1).
- Routing: `BrowserRouter` wraps the app in [src/index.js](src/index.js#L15). Pages live in [src/pages](src/pages/).
- UI is built from small, focused components in [src/components](src/components/) and shared UI atoms in [src/components/ui](src/components/ui/).
- Data is local / static: [`src/data.js`](src/data.js#L1) exports `books` (an array of book objects used throughout the app).

## Conventions & patterns
- File naming: PascalCase React components with `.jsx` extension (e.g., [src/components/Nav.jsx](src/components/Nav.jsx#L1)).
- Props-driven state: components expect props (e.g., `books`, `addItemToCart`, `cart`, `updateCart`, `removeItem`, `totals`); top-level state/containers are expected to pass these down.
- Price helper pattern: components compute price using `salePrice || originalPrice` (see [src/pages/BookInfo.jsx](src/pages/BookInfo.jsx#L36)).
- Sorting: `Books.jsx` uses filter values `LOW_TO_HIGH`, `HIGH_TO_LOW`, `RATING` — use these as canonical values when integrating sort UI or tests ([src/pages/Books.jsx](src/pages/Books.jsx#L18)).
- Styling: single global CSS at [src/index.css](src/index.css#L1) using BEM-like class names (e.g., `books__container`, `book__selected--title`).
- Icons: FontAwesome icons are imported in [src/index.js](src/index.js#L1) and added with `library.add(...)`. To add an icon, import it and add to `library.add`.

## Developer workflows / commands
- Start dev server: `npm start` (runs `react-scripts start`).
- Build for production: `npm run build`.
- Run tests: `npm test` (uses the CRA test runner). There are no project-specific test configs.

## Integration points / gotchas
- No backend: data is static; if adding a backend, make this explicit and centralize fetches in a new `api/` helper.
- Cart flow: cart operations are prop-driven (see [src/pages/Cart.jsx](src/pages/Cart.jsx#L1)). If you add a cart provider or context, ensure components keep the same prop names or add a compatibility shim.
- Routes and params: pages that need ids use `useParams()` from `react-router` (see [src/pages/BookInfo.jsx](src/pages/BookInfo.jsx#L1)).

## Good first fixes / PR ideas for AI agents
- Convert duplicated price calculations to a small helper in `src/utils/price.js` and import where used.
- Extract menu open/close DOM logic in `Nav.jsx` to use `classList.toggle` safely.
- Add a small provider (context) for cart state at the top-level and wire it to `Cart`, `Nav` (cart length), and `BookInfo` (`addItemToCart`).

## What to avoid / assumptions not in code
- Don't assume a remote API endpoint exists; the repo uses `src/data.js` as the canonical data source.
- Tests and linting are default CRA configs; do not introduce new global tooling without a small README note.

If anything here is unclear or you'd like more examples (e.g., a minimal cart provider or a quick test), tell me which part to expand and I'll update this file.
