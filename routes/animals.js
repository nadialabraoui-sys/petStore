var express = require("express");
var router = express.Router();
let AnimalsService = require("../services/animals-services");
const e = require("express");

router.get("/:id", async function(req, res) {
  try{
    if(!req.params.id) return res.status(400).send("Bad request");
  const item = await AnimalsService.getById(req.params.id);
  if (!item) {
    res.status(404).send("Not Found");
  } else {
    res.json(item); }

  } catch(e) {
    res.status(500).send(e.message);
    }
});

router.get("/", async function (req, res) {
  try{
  const item = await AnimalsService.get();
  if (item.length === 0) {
    res.status(404).send("Not Found");
  } else {
    res.json(item);}
  }catch(e) {
    res.status(500).send(e.message);
  }
});

router.post("/", async function (req, res) {
  try {
    if(!req.body.name || !req.body.status) return res.status(400).send("Bad request");

    const item = await AnimalsService.post(req.body.name, req.body.description, req.body.status, req.body.image);
    res.status(201).json(item);
  } catch(e) {
    res.status(500).send(e.message);
  }
});

router.delete("/:id", async function (req, res) {
 try{ const item = await AnimalsService.delete(req.params.id);
  if (item.deletedCount === 0) {
    res.status(404).send("Couldn't process request(delete)");
  } else {
    res.send("Deleted");
  }
 } catch(e) {
   res.status(500).send(e.message);
 }
});

router.put("/:id", async function (req, res)  {
  try{
    if(!req.body.name || !req.body.status || !req.params.id) return res.status(400).send("Bad request");
    let item = await AnimalsService.update(req.params.id, req.body.name, req.body.description, req.body.status, req.body.image)
  if(item.matchedCount === 0) {
    res.status(404).send("Couldn't process request(update)");
  }else{
    res.send("Updated");
  }
  } catch(e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
