import express from "express";
import consign from "consign";

// const PORT = 3000;
const app = express();

consign()
  .include("db.js")
  .then("models")
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
