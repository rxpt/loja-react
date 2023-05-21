import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

//Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Item from "./pages/Item";
import Team from "./pages/Team";
import History from "./pages/History";
import Error404 from "./pages/404";

const routes = [
  {
    path: "/",
    element: <Home />,
    position: ["brand"],
    title: "Início",
  },
  {
    path: "/nossa-historia",
    element: <History />,
    position: ["header"],
    title: "Nossa história",
  },
  {
    path: "/nosso-time",
    element: <Team />,
    position: ["header"],
    title: "Nosso time",
  },
  {
    path: "/produtos",
    element: <Shop />,
    position: ["header"],
    title: "Nossos produtos",
  },
  {
    path: "/item/:id",
    element: <Item />,
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
        {/* Página de erro */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
