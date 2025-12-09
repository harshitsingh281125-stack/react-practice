# 🧭 React Routing Demo (react-router-dom)

**Goal:**  
Build a small multi-page React application using **react-router-dom** to understand routing, navigation, and page structure.  
Routing is an essential skill in real-world frontend apps and a common interview topic.

---

## 🧠 Concepts Covered
- Client-side routing with `react-router-dom`
- Setting up routes and nested routes
- Navigation using `<Link>` and `<NavLink>`
- Rendering components based on URL
- Route parameters (optional)
- Layout components (optional)

---

## ✅ Requirements

1. Install `react-router-dom`:
   ```bash
   npm install react-router-dom
Create three pages:

Home

About

Contact

Add a navigation bar with links:

Home

About

Contact

Highlight the active link using NavLink.

Render the correct page component based on the URL.

(Optional) Add a Not Found (404) page.

🧩 Example UI (Text-based)
[ Home ] [ About ] [ Contact ]

--------------------------------

You are on the Home Page.

Active link example:

[ Home ] [ About ] [ Contact ]
   ↑ highlighted

   
💡 Bonus Features (Optional)

Nested routes (e.g., /about/team)

Query params (e.g., /search?query=react)

Dynamic routes (/user/:id)

Layout with shared header/footer using <Outlet />

Animated route transitions (Framer Motion)

Redirects using <Navigate />