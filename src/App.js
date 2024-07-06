import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Item from "./pages/Item";
import Checkout from "./pages/Checkout";
import AboutUs from "./pages/AboutUs";
import Error404 from "./pages/404";

const routes = [
  {
    path: "/",
    element: <Home />,
    position: ["header", "brand"],
    title: "Início",
  },
  {
    path: "/quem-somos",
    element: <AboutUs />,
    position: ["header"],
    title: "Quem somos",
  },
  {
    path: "/produtos",
    element: <Shop />,
    position: ["header"],
    title: "Nossos produtos",
  },
  {
    path: "/produto/:name/:sku",
    element: <Item />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Header routes={routes} />
      <Routes>
        {routes
          .map(({ path, element }) => ({ path, element }))
          .map((route, index) => (
            <Route {...route} key={index} />
          ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
