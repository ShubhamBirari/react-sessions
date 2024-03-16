import { useState } from "react";
import Button from "./Button";

const Card = ({ book }) => {
  const [quantity, setQuantity] = useState(book.quantity);

  return (
    <div className="card-container">
      <div className="card-image">Book Image</div>
      <div>{book.name}</div>
      <div>{book.price} </div>
      <div className="card-footer">
        <Button
          style={{ background: "red" }}
          onClick={() => setQuantity((book) => book - 1)}
        >
          -
        </Button>
        {quantity}
        <Button
          style={{ background: "green" }}
          onClick={() => setQuantity((book) => book + 1)}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Card;
