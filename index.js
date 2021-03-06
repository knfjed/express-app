// expressモジュールを読み込む
var express = require("express");

// ejsの読み込み
var ejs = require("ejs");

// アプリケーションオブジェクトの用意
var app = express();

// レンダリングエンジンの設定
app.engine("ejs", ejs.renderFile);

// 静的ファイルの読み込み
app.use(express.static("public"));

// bodyParserの利用
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// data
var data = {
  Taro: "taro@yamada.com",
  Hanako: "hanako@sato.com",
  Sachiko: "sachiko@suzuki.com",
  Ichiro: "ichiro@abe.com",
};

// ルーティングの設定
app.get("/", (req, res) => {
  var msg = "This is Express Page!<br>" + "*データを表示します";

  // indexをレンダリングする
  res.render("index.ejs", {
    title: "INDEX",
    content: msg,
    data: data,
  });
});

// POST送信
app.post("/", (req, res) => {
  var msg =
    "This is Posted Page!<br>" +
    "あなたは" +
    req.body.message +
    "と送信しました";

  res.render("index.ejs", { title: "posted", content: msg });
});

// 待受の開始
var server = app.listen(3011, () => {
  console.log("app listening!");
});
