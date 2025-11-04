# 🧩 Accordion & Tabs Component

**Goal:**  
Build two reusable UI components — **Accordion** and **Tabs** — to practice **component composition, conditional rendering, and state management** in React.

These are classic interview questions that test your ability to structure interactive, reusable UI components.

---

## 🧠 Concepts Covered
- Component design & reusability  
- Controlled vs. uncontrolled components  
- Conditional rendering  
- State isolation using `useState`  
- Handling dynamic content via props  
- Basic CSS for UI transitions and layout  

---

## ✅ Requirements

### 🪗 Accordion Component
1. Accept a list of items (`title`, `content`) via props.  
2. Clicking on an item’s header toggles its visibility.  
3. Only one section should be open at a time (optional).  
4. Smooth expand/collapse animation (optional).  

**Example Usage:**
```jsx
<Accordion
  items={[
    { title: "What is React?", content: "React is a JS library for building UIs." },
    { title: "What is a Hook?", content: "Hooks are functions to manage state and lifecycle." },
  ]}
/>
🧱 Tabs Component

Accept a list of tabs (label, content) via props.

Display tab headers at the top.

Highlight the active tab and show its content.

Example Usage:

<Tabs
  tabs={[
    { label: "Home", content: "Welcome to the Home tab" },
    { label: "Profile", content: "This is your Profile" },
    { label: "Settings", content: "Adjust your preferences here" },
  ]}
/>
💡 Bonus Ideas

Add icons for each tab or accordion item

Allow multiple accordions open at once

Support keyboard navigation (Arrow keys, Enter, Space)

Add animations with CSS transitions or Framer Motion

Build a “controlled” version that receives active index from parent via props

🧩 Example UI (Text-based)

Accordion Example

▼ What is React?
   React is a JS library for building UIs.

▶ What is a Hook?

Tabs Example

[ Home ] [ Profile ] [ Settings ]
---------------------------------
Welcome to the Home tab

