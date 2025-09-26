# 🛒 Mini E-commerce Product Catalog (React + Vite + Tailwind)

A responsive mini e-commerce product catalog built with **React (Vite)**, **Tailwind CSS**, and **React Router**.  
It includes product listing, search & filter, product details, and a simple cart with totals.  

---

## 🚀 Features
- **Product List**: Show product image, name, price, and stock availability  
- **Search & Filter**: Search by name and filter by category  
- **Product Details**: Individual product view with description  
- **Cart**: Add/remove items, view total price, and shipping fee  
- **Responsive UI**: Optimized for both mobile and desktop  
- **Static Data**: Products loaded from local data file  
- **Bonus**: Unit tests for components using **Vitest + React Testing Library**  

# 📂 Project Structure

nanosoft-product-catalog/
├─ node_modules/
├─ public/
├─ src/
│  ├─ assets/                # Images & static assets
│  │  └─ images/             # Product images, icons, etc.
│  ├─ components/            # Reusable UI components
│  │  ├─ cart/               # Cart-related components
│  │  │  └─ CartTotal.jsx
│  │  ├─ searchbar/          # Search bar component
│  │  │  └─ Searchbar.jsx
│  │  └─ ProductCard.jsx     # Individual product card component
│  ├─ context/               # Global state management
│  │  └─ ShopContext.jsx
│  ├─ pages/                 # Route pages
│  │  ├─ CartPage.jsx
│  │  ├─ HomePage.jsx
│  │  ├─ ProductDetailsPage.jsx
│  │  └─ ProductsPage.jsx
│  ├─ App.jsx                # Main app component with routing
│  ├─ App.css                # Global styles
│  ├─ index.css              # Tailwind CSS imports
│  └─ main.jsx               # Entry point
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package.json
├─ package-lock.json
├─ vite.config.js
├─ vitest.config.js
└─ README.md

## 🛠️ Tech Stack
- **React (Vite)** — Fast build tool and dev server  
- **React Router DOM** — Client-side routing  
- **Tailwind CSS** — Utility-first responsive styling  
- **Context API** — State management for cart and search  
- **Vitest + React Testing Library** — Unit testing  

---

## ⚙️ Setup & Installation

1. **Clone the repo**
```bash
git clone https://github.com/your-username/product-catalog.git
cd product-catalog
```
2. **Install Dependencies**
```bash
npm install
```
3. **Run The Development Server**
```bash
npm run dev
```
4. **Run Test**
```bash
npm run test
```

