import { InputGroup, Button, Form } from "react-bootstrap";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Input({ value, onChange }) {
  return (
    <InputGroup size="sm">
      <Button variant="outline-secondary" onClick={() => onChange(value - 1)}>
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <Form.Control
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-center"
        readOnly
      />
      <Button variant="outline-secondary" onClick={() => onChange(value + 1)}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </InputGroup>
  );
}

export default Input;
