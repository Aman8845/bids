import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "@/store/store.js";
import { Provider } from "react-redux";
import { ClerkProvider } from "@clerk/clerk-react";

const clerk_key = import.meta.env.VITE_CLERK_KEY;

if (!clerk_key) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ClerkProvider publishableKey={clerk_key} afterSignOutUrl="/">
      <main className="container mx-auto">
        <div className="flex items-start justify-center min-h-screen">
          <div className="mt-10">
            <App />
          </div>
        </div>
      </main>
    </ClerkProvider>
  </Provider>
);
