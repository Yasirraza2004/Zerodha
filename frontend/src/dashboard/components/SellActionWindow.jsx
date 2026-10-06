import { useContext, useState } from "react";
import GeneralContext from "./GeneralContext";

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow , handleRefresh} = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = async () => {
    try {
      await axios.post("http://localhost:8080/sellOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "Sell",
      });

      handleRefresh();
      closeSellWindow();
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleCancelClick = () => {
    closeSellWindow();
  };

   return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
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
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{stockQuantity * stockPrice}</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;