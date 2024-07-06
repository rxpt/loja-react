import { Offcanvas, Button, Row, Col, ListGroup } from "react-bootstrap";
import { useCart, useCartDispatch } from "../../contexts/CartContext";
import {
  faTrash,
  faShoppingCart,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import getPrice from "../../utils/getPrice";

function Cart() {
  const navigate = useNavigate();
  const {
    state: { cartItems, showShoppingCart },
  } = useCart();
  const cartDispatch = useCartDispatch();
  const totalItems = cartItems.length;
  const items = cartItems.map((item) => ({
    ...item,
    price: getPrice(item.price, item.discount, item.quantity),
  }));

  return (
    <Offcanvas
      show={showShoppingCart}
      onHide={() => cartDispatch.setShowShoppingCart(false)}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          Carrinho ({totalItems !== 1 ? `${totalItems} itens` : "1 item"})
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {items.length ? (
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
                  <Col className="text-end col-auto">
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => {
                        cartDispatch.removeFromCart(item.sku);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} className="text-danger" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <Row className="flex-column align-items-center mt-5 mb-5">
            <Col className="text-center">Seu carrinho está vazio</Col>
            <Col className="text-center">
              <Button
                variant="primary"
                onClick={() => {
                  cartDispatch.setShowShoppingCart(false);
                }}
              >
                Continuar comprando <FontAwesomeIcon icon={faCartPlus} />
              </Button>
            </Col>
          </Row>
        )}
      </Offcanvas.Body>
      {items.length && (
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col md={8}>
                <strong>Total</strong>
              </Col>
              <Col md={4} className="text-end">
                <strong>
                  {items
                    .reduce((acc, item) => acc + item.price.total, 0)
                    .toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </strong>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              variant="secondary"
              onClick={() => {
                cartDispatch.setShowShoppingCart(false);
                navigate("/checkout");
              }}
              className="w-100"
            >
              Finalizar compra <FontAwesomeIcon icon={faShoppingCart} />
            </Button>
          </ListGroup.Item>
        </ListGroup>
      )}
    </Offcanvas>
  );
}

export default Cart;
