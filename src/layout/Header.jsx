import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationContext } from "../App";

const Header = () => {
  const navigate = useNavigate();
  const { selectedItems } = useContext(ApplicationContext);

  const list = selectedItems?.filter((item) => item.selected);

  return (
    <div className="header-container">
      <div onClick={() => navigate("/")}>
        <label>Book Store</label>
      </div>

      <div onClick={() => navigate("/cart")}>
        Cart
        {list.length > 0 && (
          <label
            style={{
              background: "red",
              color: "white",
              fontSize: 16,
              padding: 8,
              borderRadius: "50%",
            }}
          >
            {list.length}
          </label>
        )}
      </div>
    </div>
  );
};

export default Header;
