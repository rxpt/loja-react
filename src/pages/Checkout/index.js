import { useCart, useCartDispatch } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import getPrice from "../../utils/getPrice";
import Input from "../../components/Cart/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  ListGroup,
  Row,
  Col,
  Button,
  ButtonGroup,
} from "react-bootstrap";

function Checkout() {
  const navigate = useNavigate();
  const cartDispatch = useCartDispatch();
  const {
    state: { cartItems },
  } = useCart();
  const items = cartItems.map((item) => ({
    ...item,
    price: getPrice(item.price, item.discount, item.quantity),
  }));
  const total = items
    .reduce((acc, item) => acc + item.price.total, 0)
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <Container className="mt-4">
      <h1>Finalizar compra</h1>
      <Row className="mt-4">
        <Col>
          <ListGroup>
            {items.map((item, index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col>
                    <strong>{item.title}</strong>
                    <Row>
                      <Col md={6}>
                        <small>{item.sku}</small>
                      </Col>
                      <Col md={6} className="text-end">
                        <Input
                          value={item.quantity}
                          onChange={(value) =>
                            cartDispatch.updateQuantity(item.sku, value)
                          }
                        />
                        <small>x {item.price.formattedPrice}</small> ={" "}
                        <strong>{item.price.formattedTotal}</strong>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={6}>
          <Row className="mb-4">
            <Col md={6}>
              <strong>Total</strong>
            </Col>
            <Col md={6} className="text-end">
              <strong>{total}</strong>
            </Col>
          </Row>
          <ButtonGroup className="w-100">
            <Button
              variant="secondary"
              onClick={() => navigate("/")}
              className="w-100"
            >
              Continuar comprando
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                cartDispatch.clearCart();
                alert("Compra realizada com sucesso!");
                navigate("/");
              }}
              className="w-100"
            >
              Comprar <FontAwesomeIcon icon={faShoppingCart} />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
