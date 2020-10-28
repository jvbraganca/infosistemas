const express = require("express");

const Veiculo = require("../models/Veiculo");

const router = express.Router();

router.get("/lastId", async (req, res) => {
  await Veiculo.findOne().sort({ _id: -1}).exec((err, data) => {
    return res.send(data._id);
  })
});

router.post("/", async (req, res) => {
  try {
    const veiculo = await Veiculo.create(req.body);
    res.json({ veiculo });
  } catch (error) {
    return res.json({ message: error });
  }
});

router.get("/", async (req, res) => {
  await Veiculo.find({}, (err, veiculos) => {
    if (!err) return res.json(veiculos);
  });
});

router.get("/:veiculoId", async (req, res) => {
  try {
    const veiculo = await Veiculo.findById(req.params.veiculoId);
    return res.json(veiculo);
  } catch (error) {
    return res.json({ message: error });
  }
});

router.delete("/:veiculoId", async (req, res) => {
  try {
    const removed = await Veiculo.deleteOne({ _id: req.params.veiculoId });
    return res.json(removed);
  } catch (error) {
    return res.json({ message: error });
  }
});

router.patch("/:veiculoId", async (req, res) => {
  try {
    const updated = await Veiculo.updateOne(
      { _id: req.params.veiculoId },
      req.body
    );
    return res.json(updated);
  } catch (error) {
    return res.json({ message: error });
  }
});


module.exports = (app) => app.use("/api/v1", router);
