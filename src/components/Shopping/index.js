import { Container, Row, Col } from "react-bootstrap";
import Card from "../Item/Card";

function Shopping({ title = "Nossa loja", products = [] }) {
  return (
    <Container className="py-4">
      <h2>{title}</h2>
      <Row className="py-4">
        {products.length ? (
          products.map((item, index) => (
            <Col key={index}>
              <Card {...item} />
            </Col>
          ))
        ) : (
          <Col>Ops, não temos nada por enquanto.</Col>
        )}
      </Row>
    </Container>
  );
}

export default Shopping;
