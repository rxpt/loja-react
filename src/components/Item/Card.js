import { Card as BsCard, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import getPrice from "../../utils/getPrice";
import Rating from "./Rating";

function Card(item) {
  const { formattedPrice, formattedFullPrice } = getPrice(
    item.price,
    item.discount
  );

  return (
    <BsCard>
      <BsCard.Img variant="top" src={item.image} alt={item.sku} />
      <BsCard.ImgOverlay className="p-1">
        <div className="row g-2">
          <div className="col d-flex justify-content-start gap-1">
            {item.isNew && <Badge bg="danger text-uppercase">Novidade</Badge>}
            {item.discount > 0 && (
              <Badge bg="warning text-uppercase">{item.discount}% off</Badge>
            )}
          </div>
          <div className="col d-flex justify-content-end gap-1">
            {item.sizes.map((size) => (
              <Badge bg="secondary" key={size}>
                {size}
              </Badge>
            ))}
          </div>
        </div>
      </BsCard.ImgOverlay>
      <BsCard.Body className="text-center">
        <BsCard.Title>{item.title}</BsCard.Title>
        <BsCard.Subtitle className="mb-2 text-muted">
          <Rating rating={item.rating} />
        </BsCard.Subtitle>
        <BsCard.Text>{item.shortDescription}</BsCard.Text>
        <Link
          to={`/produto/${item.title.replace(" ", "-")}/${item.sku}`}
          className="stretched-link btn btn-secondary"
        >
          <span>{formattedPrice}</span>
          {item.discount > 0 && (
            <span className="text-decoration-line-through text-body-secondary ms-2">
              {formattedFullPrice}
            </span>
          )}
        </Link>
      </BsCard.Body>
    </BsCard>
  );
}

export default Card;
