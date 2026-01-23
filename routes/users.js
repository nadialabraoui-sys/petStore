var express = require("express");
var router = express.Router();
let UserService = require("../services/users-services");
const e = require("express");

router.get("/:id", async function(req, res) {
  try{
    if(!req.params.id) return res.status(400).send("Bad request");
    const item = await UserService.getById(req.params.id);
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
    const item = await UserService.get();
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
    if(!req.body.email || !req.body.password) return res.status(400).send("Bad request");

    const item = await UserService.post(req.body.email, req.body.password);
    res.status(201).json(item);
  } catch(e) {
    res.status(500).send(e.message);
  }
});

router.delete("/:id", async function (req, res) {
  try{ const item = await UserService.delete(req.params.id);
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
    if(!req.body.email || !req.body.password) return res.status(400).send("Bad request");
    let item = await UserService.update(req.body.email, req.body.password);
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
