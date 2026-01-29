# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
npm start          # Start development server (localhost:3000)
npm run build      # Production build to /build folder
npm test           # Run tests in interactive watch mode
npm run deploy     # Build and deploy to GitHub Pages
```

## Architecture Overview

This is a React 18 portfolio website using Create React App, deployed to GitHub Pages at `https://gallaghercareer.github.io/portfolio-2025/`.

### Key Technologies
- **UI Framework**: Material-UI v5 (MUI) with Emotion for styling
- **Routing**: React Router v6 with react-router-hash-link for anchor navigation
- **HTTP Client**: Axios for API calls
- **State Management**: React Context API (CartContext for shopping cart state)

### Project Structure

```
src/
├── App.js              # Root component with React Router configuration
├── index.js            # Entry point with ThemeProvider wrapper
├── theme.js            # MUI theme customization (primary: #1760a5, secondary: #15c630)
├── Components/         # Page and UI components
│   ├── Home.jsx        # Landing page with video banner and project cards
│   ├── Navbar.jsx      # Sticky navigation with hash link scrolling
│   ├── Footer.jsx      # Site footer
│   ├── Weather.jsx     # Weather API demo (uses weatherapi.com)
│   ├── ShoppingCart.jsx # Food items catalog
│   ├── Cart.jsx        # Cart view
│   ├── foodItems.jsx   # Individual food item card component
│   ├── Login.jsx       # Login page
│   └── Dashboard.jsx   # Dashboard page
├── Helper/
│   ├── CartContext.jsx     # Shopping cart state provider (items, addToCart, removeFromCart)
│   └── StyledHashScroll.jsx # Styled hash link components for smooth scrolling
└── media/              # Static assets (images, video)
```

### Routes
- `/` - Home page
- `/weather` - Weather app demo
- `/shoppingcart` - Food catalog
- `/cart` - Shopping cart
- `/login` - Login page
- `/dashboard` - Dashboard
- `/*` - Fallback to Home

### Patterns
- Components use MUI's `sx` prop for responsive styling with breakpoints (xs, sm, md, lg)
- CartContext wraps the entire Router for global cart state access
- Hash links (`/#about`, `/#portfolio`) for single-page navigation with smooth scrolling
