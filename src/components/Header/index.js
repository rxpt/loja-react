import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header({ routes }) {
  const brandLink = routes.find((route) => route.position?.includes("brand"));
  const headerMenu = routes.filter((route) =>
    route.position?.includes("header")
  );

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
            <Navbar.Text>Shop</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
