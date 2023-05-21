import { useParams } from "react-router-dom";

function Item() {
  const { id } = useParams();

  return <div>Produto {id}</div>;
}

export default Item;
