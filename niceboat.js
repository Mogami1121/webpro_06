const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
//ここにかいて
let slist = [
  { number:"1号艇", name:"田中太郎", class:"A1", sex:"男", age:"23", cnt:"東京/東京支部", wht:"51.0"},
  { number:"2号艇", name:"田中太郎", class:"A1", sex:"男", age:"23", cnt:"東京/東京支部", wht:"51.0" },
  { number:"3号艇", name:"佐藤花音", class:"B1", sex:"女", age:"28", cnt:"千葉/千葉支部", wht:"48.0" },
  { number:"4号艇", name:"鈴木悠真", class:"A2", sex:"男", age:"31", cnt:"長崎/長崎支部", wht:"55.5" },
  { number:"5号艇", name:"森下ひより", class:"B2", sex:"女", age:"25", cnt:"埼玉/埼玉支部", wht:"49.0" },
  { number:"6号艇", name:"高橋健介", class:"A1", sex:"男", age:"34", cnt:"大阪/大阪支部", wht:"53.5" },
];

let staten = [
  { number:"1号艇", name:"田中太郎", st:"F0.2", chilt:"-0.5", morter:"53.3"},
  { number:"2号艇", name:"田中太郎", st:"F1.4", chilt:"-0.5", morter:"25.5"},
  { number:"3号艇", name:"佐藤花音", st:"0.5", chilt:"0.0", morter:"35.0"},
  { number:"4号艇", name:"鈴木悠真", st:"0.11", chilt:"-0.5", morter:"29.7"},
  { number:"5号艇", name:"森下ひより", st:"F0.8", chilt:"1.0", morter:"32.6"},
  { number:"6号艇", name:"高橋健介", st:"0.22", chilt:"3.0", morter:"40.0"},
];

app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/racer", (req, res) => {
  res.render("racer", { data: slist });
});

app.get("/sol", (req, res) => {
  res.render("sol");
});

app.get("/start", (req, res) => {
  res.render("start",{data: staten});
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
