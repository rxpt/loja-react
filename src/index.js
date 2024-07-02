import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "react-bootstrap";
import { CartProvider } from "./contexts/CartContext";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ThemeProvider>
);
