import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useCartDispatch } from "../../contexts/CartContext";
import { findItemBySku } from "../../utils/findItem";
import getPrice from "../../utils/getPrice";

function Item() {
  const { sku } = useParams();
  const item = findItemBySku(sku);
  const cartDispatch = useCartDispatch();
  const { formattedPrice, formattedFullPrice } = getPrice(
    item.price,
    item.discount
  );

  return (
    <Container className="py-4">
      <Row>
        <Col md={4}>
          <img src={item.image} alt={item.title} className="img-fluid" />
        </Col>
        <Col md={8}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>
            <strong>Preço:</strong> {formattedPrice}
            {item.discount > 0 && (
              <span className="text-decoration-line-through text-body-secondary ms-2">
                {formattedFullPrice}
              </span>
            )}
          </p>
          <Row>
            <Col md={4}>
              {item.sizes.length && (
                <p>
                  <strong>Tamanhos disponíveis:</strong>{" "}
                  <select name="size" id="size" className="form-select">
                    {item.sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}{" "}
                  </select>
                </p>
              )}
            </Col>
          </Row>
          <Button
            variant="secondary"
            onClick={() => {
              const itemVariation = document.querySelector("#size").value;
              const itemSku = `${item.sku}-${itemVariation}`;
              cartDispatch.addToCart({
                ...item,
                sku: itemSku,
                quantity: 1,
                title: `${item.title} - ${itemVariation}`,
              });
              cartDispatch.setShowShoppingCart(true);
            }}
          >
            Adicionar ao carrinho
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Item;
