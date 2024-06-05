const express = require("express");
const userRouter = require("./src/routes/UserRouter");
const addressRouter = require("./src/routes/AddressRouter");
const parkingRouter = require("./src/routes/ParkingRouter");
const parkingSpaceRouter = require("./src/routes/ParkingSpaceRouter");
const paymentRouter = require("./src/routes/PaymentRouter");
const paymentTypeRouter = require("./src/routes/PaymentTypeRouter");
const registerRouter = require("./src/routes/RegisterRouter");
const authRouter = require("./src/routes/AuthRouter");

const app = express();
const port = 3000;
app.use(express.json());
app.use("/user", userRouter);
app.use("/address", addressRouter);
app.use("/parking", parkingRouter);
app.use("/parkingSpace", parkingSpaceRouter);
app.use("/payment", paymentRouter);
app.use("/paymentType", paymentTypeRouter);
app.use("/register", registerRouter);
app.use("/auth", authRouter);


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
