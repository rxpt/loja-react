import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart, useCartDispatch } from "../../contexts/CartContext";
import Cart from "../Cart";

function Header({ routes }) {
  const {
    state: { cartItems },
  } = useCart();
  const cartDispatch = useCartDispatch();
  const brandLink = routes.find((route) => route.position?.includes("brand"));
  const headerMenu = routes.filter((route) =>
    route.position?.includes("header")
  );
  const totalItems = cartItems.length;

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to={brandLink?.path} className="navbar-brand">
            Loja do Zé
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              {headerMenu.length &&
                headerMenu.map((route, index) => (
                  <Link to={route.path} className="nav-link" key={index}>
                    {route.title}
                  </Link>
                ))}
            </Nav>
            <Nav>
              <Button
                variant="secondary"
                onClick={() => cartDispatch.setShowShoppingCart(true)}
              >
                <FontAwesomeIcon icon={faShoppingBag} /> {totalItems}
              </Button>
              <Cart />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
