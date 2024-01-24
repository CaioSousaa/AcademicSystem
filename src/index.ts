import express from "express";
import { appDataSource } from "./data-source";

appDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => {
    return res.json("server is running!!!");
  });

  return app.listen(process.env.PORT);
});
