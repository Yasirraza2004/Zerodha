const express = require("express");
const connectDB = require("./src/Config/database");
const config = require("./src/Config/config");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./src/Routes/authRoute");
const morgan = require("morgan"); 


const Holdings = require("./src/models/holdingsModel");
const Positions = require("./src/models/positionsModel");
const Orders = require("./src/models/ordersModel");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin:  [
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/", authRoute);
app.use(morgan("dev"));


connectDB();
const PORT = config.PORT;



app.get("/allHoldings", async (req, res) => {
  let allHoldings = await Holdings.find({});
  res.json(allHoldings);
});


app.get("/allPositions", async (req, res) => {
  let allPositions = await Positions.find({});
  res.json(allPositions);
});


app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    let newOrder = new Orders({
      name: name,
      qty: qty,
      price: price,
      mode: mode,
    });

    await newOrder.save();

    let holding = await Holdings.findOne({ name: name });

    if (holding) {
      const oldInvestment = holding.avg * holding.qty;
      const newInvestment = price * qty;

      holding.qty += qty;
      
      holding.avg = (oldInvestment + newInvestment) / holding.qty;

      await holding.save();
    } else {
      let newHolding = new Holdings({
        name: name,
        qty: qty,
        avg: price,
        price: price,
      });

      await newHolding.save();
    }

    res.json("Order placed successfully");

  } catch (error) {
    console.log(error);
  }
});


app.get("/allOrders", async (req, res) => {
  let allOrders = await Orders.find({});
  res.json(allOrders);
});

app.patch("/sellOrder", async(req, res) => {
  const { name } = req.body;

  let holding = await Holdings.findOneAndUpdate({ name: name });
  console.log(holding);
})

app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`);
});
