// expressモジュールを読み込む
var express = require("express");

// アプリケーションオブジェクトの用意
var app = express();

// ejsの読み込み
var ejs = require("ejs");

// レンダリングエンジンの設定
app.engine("ejs", ejs.renderFile);

// 静的ファイルの読み込み
app.use(express.static("public"));

// ルーティングの設定
app.get("/", (req, res) => {
  var msg = "This is Express Page!" + "これはスタイルシートを利用した例です";

  // indexをレンダリングする
  res.render("index.ejs", {
    title: "INDEX",
    content: msg,
  });
});

// 待受の開始
app.listen(3010, () => {
  console.log("app listening!");
});
