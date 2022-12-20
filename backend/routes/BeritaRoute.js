const express = require("express");
const router = express.Router();

const Berita = require("../models/BeritaModel");

router.get("/getallberita", async (req, res) => {
    try {
      const berita = await Berita.find({});
      res.send(berita);
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  });

 router.get("/getberitaByID/:id",async (req, res) => {
    try {
        const berita = await Berita.findById(req.params.id);
        res.json(berita);
    } catch (error) {
        res.status(404).json({message: err});
    }
});

  router.post("/tambahberita", async (req, res) => {
    try {
      const berita = new Berita(req.body);
      await berita.save();
      res.send("new Berita Added Success");
    } catch (error) {
      return res.status(400).json({ error });
    }
  });

  router.delete("/hapusberita/:id", async (req, res) => {
    try {
        const hapus = await Berita.deleteOne({_id: req.params.id});
        res.status(200).json(hapus);
    } catch (error) {
        res.status(400).json({message: err});
}
});

router.patch("/editberita/:id", async (req, res) => {
  try {
      const edit = await Berita.updateOne({_id: req.params.id}, {$set:req.body});
      res.status(200).json(edit);
  } catch (error) {
      res.status(400).json({message: err});
}
});

  module.exports = router;