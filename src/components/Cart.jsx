import { useContext } from "react";
import { ApplicationContext } from "../App";
import Button from "./Button";

const Cart = () => {
  const { selectedItems, setSelectedItems } = useContext(ApplicationContext);

  const getTotalPrice = () => {
    let sum = 0;

    selectedItems.forEach((item) => {
      if (item.selected) sum += item.price * item.quantity;
    });

    return sum;
  };

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
    <>
      {selectedItems.map(
        (item) =>
          item.selected && (
            <div className="cart-container">
              <div className="cart-item">
                <div>
                  <p>{item.name}</p>
                </div>
                <div>
                  <p>{item.price}</p>
                </div>
                <div>
                  <Button
                    style={{ background: "red" }}
                    onClick={() => {
                      onQuantityChange(item.quantity - 1, item.id);
                    }}
                  >
                    -
                  </Button>
                  <label>{item.quantity}</label>
                  <Button
                    style={{ background: "green" }}
                    onClick={() => {
                      onQuantityChange(item.quantity + 1, item.id);
                    }}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          )
      )}

      <h1>Total : {getTotalPrice()}</h1>
    </>
  );
};

export default Cart;
