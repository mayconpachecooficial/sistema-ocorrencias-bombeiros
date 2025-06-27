const express = require("express");
const router = express.Router();
let dados = [];
router.post("/", (req, res) => {
  const nova = { id: Date.now(), ...req.body };
  dados.push(nova);
  res.status(201).json(nova);
});
router.get("/", (req, res) => {
  res.json(dados);
});
module.exports = router;