import { Offcanvas, Button, Row, Col, ListGroup } from "react-bootstrap";
import { useCart, useCartDispatch } from "../../contexts/CartContext";
import getPrice from "../../utils/getPrice";

function Cart() {
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
        <Offcanvas.Title>Carrinho ({totalItems})</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {items.length ? (
          <ListGroup>
            {items.map((item, index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col md={8}>
                    <strong>{item.title}</strong>
                    <br />
                    <small>
                      {item.quantity} x {item.price.formattedPrice}
                    </small>
                  </Col>
                  <Col md={4} className="text-end">
                    <strong>{item.price.formattedTotal}</strong>
                    <Button variant="link" size="sm" onClick={() => {
                        cartDispatch.removeFromCart(item.sku);
                    }}>
                      Remover
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
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
                }}
              >
                Finalizar compra
              </Button>
            </ListGroup.Item>
          </ListGroup>
        ) : (
          <p>Seu carrinho está vazio.</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Cart;
