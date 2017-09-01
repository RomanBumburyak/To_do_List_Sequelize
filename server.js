

const express = require("express");
const mustacheExpress = require("mustache-express");
const path = require("path");
const morgan = require("morgan");
const routes = require("./routes/index");
const bodyParser = require("body-parser");


const app = express();

app.engine("mustache", mustacheExpress());
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "mustache");
app.set("layout", "layout");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));

app.use(routes);

app.listen(3002,function(){
  console.log("Party on");
})
