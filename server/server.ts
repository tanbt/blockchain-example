const express = require('express');
const cors = require("cors");

import { Blockchain } from "./Blockchain";
import { Response, Request } from "express";
import { Block } from "./Block";

const bc: Blockchain = new Blockchain();

//  SETUP EXPRESS APP
const app = express();

app.use(cors());
app.use(express.json());

/**
 * GET  http://localhost:9000/api/v1/blocks
 */
app.route("/api/v1/blocks").get((req: Request, res: Response) => {
  return res.json(bc.chain);
});

/**
POST http://localhost:9000/api/v1/blocks/mine
  Host: localhost:9000
  Content-Type: application/json
  Host: localhost:9000

  {"data": "new block data"}
 */
app.route("/api/v1/blocks/mine").post((req: Request, res: Response) => {
  const block = bc.addBlock(req.body.data);
  console.log(`New block added: ${block}`);
  return res.redirect('/api/v1/blocks');
})

//  SETUP EXPRESS SERVER
const HTTP_HOST = process.env.HOST || "localhost";
const HTTP_PORT = process.env.HTTP_PORT || 9000;

app.listen(HTTP_PORT, () => {
  console.log(`HTTPS Server started at http://${HTTP_HOST}:${HTTP_PORT}`);
});
