# LUMINARY — Premium E-Commerce Experience

Luminary is a high-end, frontend-only E-Commerce Single Page Application (SPA) designed with a meticulous focus on aesthetics, performance, and user experience. Inspired by Apple's design language, it features fluid animations, glassmorphism, and AI-powered product insights.

## ✨ Key Features

-   **Apple-Style Aesthetic:** Minimalist design with high-quality typography, generous white space, and a premium color palette.
-   **Fluid Animations:** Powered by `framer-motion`, featuring scroll-triggered entrance animations, parallax hero sections, and morphing UI elements.
-   **AI Intelligence (Gemini API):** Real-time, punchy product "Insights" generated dynamically using the Google Gemini 3 Flash model.
-   **Glassmorphism:** Elegant navigation and UI overlays utilizing advanced CSS backdrop filters.
-   **Responsive Design:** Fully optimized for all screen sizes with a custom grid system and tailored mobile interactions.
-   **Seamless Cart System:** A smooth side-drawer shopping experience with real-time total calculations and quantity management.
-   **Interactive Product Modals:** Rich technical specification views with context-aware iconography.

## 🛠 Tech Stack

-   **Framework:** [React 19](https://react.dev/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Build System:** ES Modules via [esm.sh](https://esm.sh/)

## 🧠 AI Integration

Luminary utilizes the `gemini-3-flash-preview` model to act as an "Expert Tech Reviewer." When a user opens a product modal, the system fetches a unique, concise insight based on the product's description.

**Service Location:** `services/geminiService.ts`

```typescript
const response = await ai.models.generateContent({
  model: 'gemini-3-flash-preview',
  contents: `You are an expert tech reviewer...`
});
```

## 🚀 Getting Started

1.  Ensure you have a valid **Google Gemini API Key**.
2.  The application expects the key via `process.env.API_KEY`.
3.  Open `index.html` in any modern browser to experience the live application.

---

*Designed and engineered for perfection.*