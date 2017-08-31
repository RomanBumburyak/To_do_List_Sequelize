
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
    res.render("index", {user : data});
  });
});
/////////////////////////////////////////////////////////////Delete The chore from the List
router.get("/destroy/:id", function (req,res) {
  models.Chore.destroy({                     ////important method it will find or create, and will save also;
    where: {
      id: req.params.id
    }
  })

  .then(function(data){                                     //.then was in place of .spread
    res.redirect("/");
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

//////////////////////////////////////////////////////////////
router.post("/", function (req,res){
    models.Chore.create({                                          //////creating and saving all in one place
    name:req.body.name,
    description: req.body.description,
    completion: req.body.completion
  })
        .then(function(data) {
          console.log(data);
          res.redirect("/");
        });
      });
///////////////////////////////////////////////

router.post("/completed/:id", function(req, res) {
 models.Chore.update({
   completed:true
 },
 {
   where:{
     id:req.params.id
   }
 }).then(function (data) {
   res.redirect("/");
 })
 });
//////////////////////////////////////////////// Post to create :

 router.post("/create", function(req, res) {
  models.Chore.create({
    Chore: req.body.Chore,
    completed:false
  })
  .then(function(data){
    data = data;
    res.redirect("/");
  })
});
///////////////////////////////////////////


















module.exports = router;
