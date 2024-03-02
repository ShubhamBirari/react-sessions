import Button from "./Button";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-image">Book Image</div>
      <div className="card-footer">
        <Button style={{ background: "red" }}>-</Button>
        <Button style={{ background: "green" }}>+</Button>
      </div>
    </div>
  );
};

export default Card;
