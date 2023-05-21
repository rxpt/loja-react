import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Shop() {
  const items = [
    {
      sku: "ZE001",
      title: "Zé-Shirt Manga-Longa",
      description:
        "Uma camiseta de manga longa confortável e estilosa, perfeita para qualquer ocasião.",
      shortDescription: "Camiseta manga longa confortável e estilosa",
      price: 49.99,
      discount: 0,
      sizes: ["P", "M", "G"],
      image: "https://i.imgur.com/hg1MGQZ.png",
      stars: 4.5,
      isNew: true,
    },
    {
      sku: "ZE002",
      title: "Zé-Hat",
      description:
        "Um boné moderno e descolado, ideal para proteger-se do sol com estilo.",
      shortDescription: "Boné moderno e descolado",
      price: 29.99,
      discount: 5,
      sizes: ["Tamanho Único"],
      image: "https://i.imgur.com/qOeBMOm.png",
      stars: 3.5,
      isNew: false,
    },
    {
      sku: "ZE003",
      title: "Zé-Ring",
      description:
        "Um anel deslumbrante que adiciona um toque de elegância a qualquer look.",
      shortDescription: "Anel deslumbrante e elegante",
      price: 79.99,
      discount: 15,
      sizes: ["P", "M", "G"],
      image: "https://i.imgur.com/uVTFwYh.png",
      stars: 5,
      isNew: true,
    },
  ];

  return (
    <Container>
      <Row className="py-4">
        {items.length ? (
          items.map((item) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.shortDescription}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Ver</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>Ops, não temos nada por enquanto.</Col>
        )}
      </Row>
    </Container>
  );
}

export default Shop;
