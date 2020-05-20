// expressモジュールを読み込む
var express = require("express");

// アプリケーションオブジェクトの用意
var app = express();

// ejsの読み込み
var ejs = require("ejs");

// レンダリングエンジンの設定
app.engine("ejs", ejs.renderFile);
// ルーティングの設定
app.get("/", (req, res) => {
  // indexをレンダリングする
  res.render("index.ejs", {
    title: "INDEX",
    content: "This page is index.ejs!!!",
  });
});

// 待受の開始
app.listen(3010, () => {
  console.log("app listening!");
});
