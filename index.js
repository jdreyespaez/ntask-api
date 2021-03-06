import express from "express";
import consign from "consign";

// const PORT = 3000;
const app = express();

consign()
  .include("libs/config.js")
  .then("db.js")
  .then("auth.js")
  .then("libs/middlewares.js")
  .then("routes")
  .then("libs/boot.js")
  .into(app);
//
// app.get("/", (req,res) => res.json({status: "NTask API"}));
//
// app.get("/tasks", (req,res) => {
//   res.json({
//     tasks: [
//       {title: "Buy some shoes"},
//       {title: "Fix notebook"}
//     ]
//   });
// });

// app.listen(PORT, () => console.log(`NTask API - Port ${PORT}`));
module.exports = app;
// Se exporta el módulo princiapl del API (es decir, index.js), para
// así permitir que se inicie el API durante los tests
