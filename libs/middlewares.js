import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

module.exports = app => {
  app.set("port", 3000);
  app.set("json spaces", 4);
  app.use(cors({
    // éste será el origen del client-side app
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }));
  app.use(bodyParser.json());
  app.use(app.auth.initialize());
  app.use((req, res, next) => {
    delete req.body.id;
    next();
  });
  app.use(express.static("public"));
};
