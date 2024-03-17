import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { ApplicationContext } from "../App";

const Card = ({ book }) => {
  const [quantity, setQuantity] = useState(book.quantity);

  const { selectedItems, setSelectedItems } = useContext(ApplicationContext);

  const onQuantityChange = (temp, id) => {
    let list = [...selectedItems];
    selectedItems.forEach((item, index) => {
      if (item.id === id) {
        list[index].quantity = temp > 0 ? temp : 0;
        list[index].selected = temp > 0;
      }
    });
    setSelectedItems(list);
  };

  return (
    <div className="card-container">
      <div className="card-image">Book Image</div>
      <div>Name : {book.name}</div>
      <div>Price : {book.price} </div>
      <div className="card-footer">
        <Button
          style={{ background: "red" }}
          onClick={() => {
            setQuantity((book) => (book > 0 ? book - 1 : 0));

            onQuantityChange(quantity - 1, book.id);
          }}
        >
          -
        </Button>
        {quantity}
        <Button
          style={{ background: "green" }}
          onClick={() => {
            setQuantity((book) => book + 1);

            onQuantityChange(quantity + 1, book.id);
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Card;
