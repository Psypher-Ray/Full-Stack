# Experiment–3: Multi-Page SPA Using Routing

## Aim  
To create a multi-page Single Page Application (SPA) using client-side routing, allowing navigation between multiple pages without reloading the browser.

---

## Software Requirements  
- Node.js  
- React  
- React Router DOM  
- Web Browser (Chrome / Edge / Firefox)

---

## Theory  
A Single Page Application (SPA) loads a single HTML page and dynamically updates the content based on user navigation. Even though it appears as a multi-page application, all navigation happens on the client side without reloading the browser.

React Router is a widely used library for implementing client-side routing in React applications. It provides components such as `BrowserRouter`, `Routes`, and `Route` to map different URL paths to different components. Each route behaves like a separate page while maintaining the SPA nature of the application.

By using routing, developers can organize applications into multiple logical pages, improve user experience, and enable faster navigation.

---

## Procedure  
1. Create a React application using Vite.  
2. Install the `react-router-dom` package.  
3. Wrap the root component with `BrowserRouter`.  
4. Create multiple components representing different pages.  
5. Map each component to a specific route using `Routes` and `Route`.  
6. Add navigation links to move between pages.  
7. Test navigation and observe that pages change without browser reload.

---

## Project Structure  
MultiPageSPA/  
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
The application is divided into multiple page components, each mapped to a specific route using React Router.

The following routes are implemented:
- `/` → Home Page  
- `/services` → Services Page  
- `/about` → About Page  
- `/contact` → Contact Page  

Navigation is performed using routing links, and the corresponding component is rendered dynamically without refreshing the browser.

---

## Output  
- Home page is displayed when the Home route is accessed.  
- Services page is displayed when the Services route is accessed.  
- About page is displayed when the About route is accessed.  
- Contact page is displayed when the Contact route is accessed.  
- Smooth navigation occurs without page reload.

---

## Screenshots  
<img width="1919" height="807" alt="image" src="https://github.com/user-attachments/assets/59be2136-6031-4ae2-b632-6c12e44f4e46" />
<img width="1915" height="700" alt="image" src="https://github.com/user-attachments/assets/72c2faad-f598-44ce-bd9c-5b97ba943b7c" />
<img width="1915" height="711" alt="image" src="https://github.com/user-attachments/assets/d05e4ec7-b081-48cb-baae-6d1dfa261036" />

---

## Result  
The experiment successfully demonstrates the creation of a multi-page SPA using client-side routing. Multiple pages are navigated seamlessly without reloading the browser.

---

## Conclusion  
Client-side routing using React Router enables the development of efficient multi-page SPAs. This experiment proves that complex navigation structures can be implemented while maintaining smooth performance and a better user experience.
