
const express = require("express");
const router = express.Router();
const models= require("../models/index");


/////////////////////////////////////////////
router.get("/", function (req,res){
  models.Chore.findAll({
    order: ['name']
  })
  .then(function(data) {             ///run.then
    console.log(data);
    res.render("index", {user: data});    //render index, nothing special
  });
});
//////////////////////////////////////////////////////////////////
router.get("/:id", function (req,res) {
  models.Chore.findOrCreate({                     ////important method it will find or create, and will save also;
    where: {
      id: req.params.id
    }
  })

  .then(function(data, created){                                     //.then was in place of .spread
    console.log(data);
    res.render("profile", {user : data});
  });
});
////////////////////////////////////////////////////This is the edit functionality:
router.post("/edit/:id", function (req,res) {
  models.Chore.update({
    name: req.body.name,
    description: req.body.description,
    completion: req.body.completion
  }, {
    where: {
    id: req.params.id
    }
}).then(function(data){                                     //.then was in place of .spread
    res.redirect("/");
  });

});
























module.exports = router;
