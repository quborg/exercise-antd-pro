import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const Server = express();
const Router = express.Router();
const PORT = 3000;

Server.use(cors(), bodyParser.json());

Server.use(
  "/api",
  Router.post("/fetch", (req, res) => {
    return res.status(201).json(req.body);
  })
);

Server.listen(PORT, console.log("Server listening on port %s!", PORT));
