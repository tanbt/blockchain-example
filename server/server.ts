const express = require('express');
const cors = require("cors");

import { Blockchain } from "./Blockchain";
import { Response, Request } from "express";

const bc: Blockchain = new Blockchain();

//  SETUP EXPRESS APP
const app = express();

app.use(cors());
app.use(express.json());

// http://localhost:9000/api/v1/blocks
app.route("/api/v1/blocks").get((req: Request, res: Response) => {
  return res.json(bc.chain);
});

//  SETUP EXPRESS SERVER
const HTTP_HOST = process.env.HOST || "localhost";
const HTTP_PORT = process.env.HTTP_PORT || 9000;

app.listen(HTTP_PORT, () => {
  console.log(`HTTPS Server started at http://${HTTP_HOST}:${HTTP_PORT}`);
});
