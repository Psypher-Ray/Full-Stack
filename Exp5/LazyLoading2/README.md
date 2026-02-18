📘 Experiment–2: Route-Based Lazy Loading in SPA
🎯 Aim

To implement route-based lazy loading to improve performance in a Single Page Application (SPA) using React.

📖 Theory

Route-based lazy loading ensures that components associated with specific routes are loaded only when the user navigates to that route.

This approach:

Reduces the initial bundle size

Improves application startup time

Enhances overall performance

Enables better code splitting

In React, lazy loading is implemented using:

React.lazy() for dynamic imports

Suspense to handle loading fallback UI

react-router-dom for routing

🛠️ Technologies Used

React (Vite)

React Router DOM

JavaScript (ES6+)

CSS (Glassmorphism UI Design)

📂 Project Structure
    lazyLoading2
    node_modules/
    public/
    src/
        main.jsx
        App.jsx
        Pages.jsx
        App.css
    .gitignore
    eslint.config.js
    index.html
    package-lock.json
    package.json
    README.md
    vite.config.js

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone <repository-url>
cd project-folder

2️⃣ Install Dependencies
npm install

3️⃣ Install React Router
npm install react-router-dom

4️⃣ Run the Development Server
npm run dev


The application will run on:

http://localhost:5173/

🚀 Implementation Steps

Installed react-router-dom.

Created multiple route components inside a single file (Pages.jsx).

Applied lazy loading using React.lazy().

Wrapped routes inside Suspense.

Added aesthetic CSS styling.

💡 How Lazy Loading Works in This Project
const Home = lazy(() =>
  import("./Pages").then((module) => ({ default: module.Home }))
);


Components are loaded only when their route is visited.

Suspense displays a loading message while the component loads.

Each route becomes a separate JavaScript chunk.

🎨 UI Features

Gradient background

Glassmorphism card layout

Smooth animations

Animated loading indicator

Responsive design

 🤖 Screenshots
<img width="1919" height="934" alt="image" src="https://github.com/user-attachments/assets/02644db8-250e-4b0e-a361-6f9817e96aaa" />


📊 Advantages of Route-Based Lazy Loading

Faster initial load time

Reduced bundle size

Better user experience

Efficient resource utilization

🧪 Conclusion

The experiment successfully demonstrates route-based lazy loading in a React SPA. By using React.lazy() and Suspense, the application dynamically loads route components, improving performance and optimizing resource usage.
