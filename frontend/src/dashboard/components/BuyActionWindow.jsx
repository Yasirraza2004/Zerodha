import { useContext, useState } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow, handleRefresh } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = async () => {
    try {
      await axios.post("http://localhost:8080/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      handleRefresh();
      closeBuyWindow();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div
      className="buy-window-container"
      id="buy-window"
      draggable="true"
    >
      <div className="buy-window-regular-order">
        <div className="buy-window-inputs">

          <fieldset>
            <legend>Qty.</legend>

            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) =>
                setStockQuantity(Number(e.target.value))
              }
              value={stockQuantity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>

            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0"
              onChange={(e) =>
                setStockPrice(Number(e.target.value))
              }
              value={stockPrice}
            />
          </fieldset>

        </div>
      </div>

      <div className="buy-window-buttons">
        <span>
          Margin required ₹{stockQuantity * stockPrice}
        </span>

        <div>
          <button
            className="buy-window-btn buy-window-btn-blue"
            onClick={handleBuyClick}
          >
            Buy
          </button>

          <button
            className="buy-window-btn buy-window-btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
