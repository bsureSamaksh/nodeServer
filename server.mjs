import express from "express";
import paymentRouter from "./payments/router.mjs";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/payment", paymentRouter);

app.listen(8080, () => {
  console.log("Server is running");
});
