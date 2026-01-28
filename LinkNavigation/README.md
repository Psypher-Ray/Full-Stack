# Experiment–2: Navigation Using Link Component

## Aim  
To implement navigation in a Single Page Application (SPA) using the `Link` component of React Router, enabling smooth navigation between different pages without reloading the browser.

---

## Software Requirements  
- Node.js  
- React  
- React Router DOM  
- Web Browser (Chrome / Edge / Firefox)

---

## Theory  
Single Page Applications (SPAs) load a single HTML page and dynamically update content based on user interaction without refreshing the entire page. Navigation in SPAs is achieved using client-side routing.

React Router provides the `Link` component to navigate between different routes in an application. Unlike traditional anchor (`<a>`) tags, `Link` prevents full page reloads and updates the URL dynamically while rendering the corresponding component. This results in faster navigation and a better user experience.

The `BrowserRouter` component manages the routing history, while `Routes` and `Route` define which components should be rendered for specific paths. The `Link` component is used to move between routes through clickable navigation links.

---

## Procedure  
1. Create a React application using Vite.  
2. Install the `react-router-dom` package.  
3. Wrap the root component with `BrowserRouter`.  
4. Create multiple page components.  
5. Define routes using `Routes` and `Route`.  
6. Use the `Link` component to create navigation links.  
7. Click on the links to navigate between pages and observe smooth transitions without page reload.

---

## Project Structure  
LinkNavigation/  
│  
├── node_modules/  
├── public/  
│ └── vite.svg  
├── src/  
│ ├── assets/  
│ ├── App.css  
│ ├── App.jsx  
│ ├── index.css  
│ └── main.jsx  
├── index.html  
├── package.json  
├── package-lock.json  
├── vite.config.js  
└── README.md  

---

## Implementation Details  
The application uses the `Link` component for navigation between pages.  
The following routes are implemented:

- `/` → Home Page  
- `/services` → Services Page  
- `/about` → About Page  
- `/contact` → Contact Page  

Navigation is performed using clickable links displayed in the navigation bar. The URL changes dynamically, and the corresponding component is rendered without refreshing the page.

---

## Output  
- Home page is displayed when the Home link is clicked.  
- Services page is displayed when the Services link is clicked.  
- About page is displayed when the About link is clicked.  
- Contact page is displayed when the Contact link is clicked.  
- Page transitions occur smoothly without browser reload.

---

## Screenshots  

---

## Result  
The experiment successfully demonstrates navigation in a Single Page Application using the `Link` component of React Router. Page transitions occur efficiently without reloading the browser.

---

## Conclusion  
The `Link` component in React Router provides an effective way to implement navigation in SPAs. This experiment proves that seamless page navigation can be achieved using client-side routing, improving application performance and user experience.
