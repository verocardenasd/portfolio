import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx"; // Dein benutzerdefinierter Provider (ChakraProvider + ColorModeProvider)
import { LanguageProvider } from "./contexts/LanguageContext.tsx"; // LanguageProvider importieren

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </Provider>
  </StrictMode>
);
