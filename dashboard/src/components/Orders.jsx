import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const { refresh } = useContext(GeneralContext);

  useEffect(() => {
    axios.get("http://localhost:8080/allOrders").then((res) => {
      // console.log(res.data);
      setAllOrders(res.data);
    });
  }, [refresh]);

  return (
    <>
      <h3 className="title">Open Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Time</th>
            <th>Type</th>
            <th>Instrument</th>
            <th>Product</th>
            <th>Qty.</th>
            <th>LTP</th>
            <th>Price</th>
            <th>Status</th>

          </tr>

          {allOrders.map((stock, index) => {

            const findStock = watchlist.find((item) => 
              item.name === stock.name
            );
            const ltp = findStock ? findStock.price : 0;

            return (
              <tr key={index}>
                <td>
                  {new Date(stock.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                  })}
                </td>
                <td>{stock.mode}</td>
                <td>{stock.name}</td>
                <td>CNC</td>
                <td>{stock.qty}</td>
                <td>{ltp.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className="status">Completed</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

/* return (
    <>
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>
        </div>

        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
        

           {allOrders.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>

        <Link to={"/"} className="btn">
          Get started
        </Link>
    </div>
    </>
  );
}; */

export default Orders;
