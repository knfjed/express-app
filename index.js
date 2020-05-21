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

// ルーティングの設定
app.get("/", (req, res) => {
  var msg =
    "This is Express Page!<br>" + "これはスタイルシートを利用した例です";

  // indexをレンダリングする
  res.render("index.ejs", {
    title: "INDEX",
    content: msg,
    link: { href: "/other", text: "*別のページに移動" },
  });
});

// ＊別のページ
app.get("/other", (req, res) => {
  var msg = "This is Other Page!!!<br>" + "これは用意された別のページです";

  res.render("index.ejs", {
    title: "OTHER",
    content: msg,
    link: { href: "/", text: "*トップに戻る" },
  });
});

// 待受の開始
var server = app.listen(3011, () => {
  console.log("app listening!");
});
