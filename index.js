const express = require("express");
const app = express();
const path = require("path");

const convert = require("./lib/convert");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/cotacao", (req, res) => {
  const { cotDol, qtdDol } = req.query;
  const { cotEur, qtdEur } = req.query;
  const { cotBit, qtdBit } = req.query;
  const { cotEth, qtdEth } = req.query;
  if (
    cotDol &&
    qtdDol &&
    cotEur &&
    qtdEur &&
    cotBit &&
    qtdBit &&
    cotEth &&
    qtdEth
  ) {
    const conversao1 = convert.convert1(cotDol, qtdDol);
    const conversao2 = convert.convert2(cotEur, qtdEur);
    const conversao3 = convert.convert3(cotBit, qtdBit);
    const conversao4 = convert.convert4(cotEth, qtdEth);
    res.render("cotacao", {
      error: false,
      cotDol: convert.toMoney(cotDol),
      qtdDol: convert.toMoney(qtdDol),
      cotEur: convert.toMoney(cotEur),
      qtdEur: convert.toMoney(qtdEur),
      cotBit: convert.toMoney(cotBit),
      qtdBit: convert.toMoney(qtdBit),
      cotEth: convert.toMoney(cotEth),
      qtdEth: convert.toMoney(qtdEth),
      conversao1: convert.toMoney(conversao1),
      conversao2: convert.toMoney(conversao2),
      conversao3: convert.toMoney(conversao3),
      conversao4: convert.toMoney(conversao4),
    });
  } else {
    res.render("cotacao", {
      error: "Valores Inválidos",
    });
  }
});

app.listen(3000, (err) => {
  if (err) {
    console.log("nao foi possivel iniciar");
  } else {
    console.log("Binance esta online");
  }
});
