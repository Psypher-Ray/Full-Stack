📘 Experiment–1: Component Lazy Loading Using React.lazy and Suspense
🎯 Aim

To optimize frontend performance by implementing lazy loading of components in a Single Page Application using React.lazy() and Suspense.

💻 Software Requirements

Node.js

React (Vite)

React Router DOM

Code Editor (VS Code recommended)

Web Browser (Chrome/Edge/Firefox)

📖 Theory

Lazy loading is a performance optimization technique where components are loaded only when they are required.

In React:

React.lazy() allows components to be loaded dynamically.

Suspense provides a fallback UI while the component is loading.

This technique:

Reduces initial bundle size

Improves page load time

Enhances application performance

Enables efficient code splitting

📂 Project Structure
LazyLoading
node_modules/
public/
src/
   main.jsx
   App.jsx
   Dashboard.jsx
   App.css
.gitignore
eslint.config.js
index.html
package-lock.json
package.json
README.md
vite.config.js

⚙️ Installation & Setup
1️⃣ Create React App using Vite
npm create vite@latest


Select:

React
JavaScript

2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
npm run dev


Application runs at:

http://localhost:5173/

🚀 Procedure

Create a React application.

Create multiple components inside Components.jsx.

Import components using React.lazy().

Wrap lazy-loaded components inside Suspense.

Observe loading behavior during component rendering.

💡 Implementation Concept
Lazy Loading Syntax:
const ComponentName = React.lazy(() => import("./Dashboard"));

Suspense Usage:
<Suspense fallback={<div>Loading...</div>}>
   <ComponentName />
</Suspense>


React.lazy() splits the component into a separate chunk.

Suspense shows fallback UI while the chunk loads.

Component loads only when rendered.

🎨 Features

Dynamic component loading

Loading indicator using Suspense

Improved performance

Clean UI styling

Code splitting optimization

Screenshots

📊 Advantages

Faster initial application load

Reduced JavaScript bundle size

Better user experience

Efficient resource utilization

Scalable architecture

🧪 Observation

When navigating or rendering a lazy-loaded component:

The fallback UI appears briefly.

The component loads dynamically.

Network tab shows separate JavaScript chunks.

✅ Conclusion

The experiment successfully demonstrates component lazy loading using React.lazy() and Suspense. This approach improves frontend performance by loading components only when needed, reducing the initial bundle size and enhancing overall user experience.