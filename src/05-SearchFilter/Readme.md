# 🔍 Search Filter App

**Goal:**  
Build a **Search Filter** feature that dynamically filters a list of items based on user input.  
This is a classic React exercise that tests **state management, derived data, and performance optimization (filtering logic)**.

---

## 🧠 Concepts Covered
- Controlled input with `useState`
- Filtering arrays using JavaScript (`filter()`, `includes()`)
- Derived state (computed UI from source data)
- Conditional rendering
- Handling empty or no-results cases
- (Optional) Performance optimization using `useMemo` or debouncing

---

## ✅ Requirements

1. Display a list of items (e.g., names, cities, or products).  
2. Add a search input field above the list.  
3. As the user types:
   - Filter the list to show only items that match the query (case-insensitive).  
   - Update results in real time.  
4. Show a **“No results found”** message if nothing matches.  
5. (Optional) Highlight matched text in results.  

---

## 💡 Bonus Ideas
- Add **category filters** or dropdown filters (e.g., filter by type, price range, etc.)  
- Implement **debouncing** using `setTimeout` or a custom hook to improve performance  
- Add **clear search** button  
- Fetch data from an API (like `jsonplaceholder` or a product API) instead of static data  
- Add keyboard accessibility or instant focus on input  

---

## 🧩 Example UI (Text-based)

Search Filter 🔍

[ Search: ______________ ]

Results:

Harshit Singh

Aditya Mehta

Riya Kapoor


*If no results:*

No results found ❌