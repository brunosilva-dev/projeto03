const convert1 = (cotDol, qtdDol) => {
  return cotDol * qtdDol;
};
const convert2 = (cotEur, qtdEur) => {
  return cotEur * qtdEur;
};
const convert3 = (cotBit, qtdBit) => {
  return cotBit * qtdBit;
};
const convert4 = (cotEth, qtdEth) => {
  return cotEth * qtdEth;
};
const toMoney = (valor) => {
  return parseFloat(valor).toFixed(2);
};

module.exports = {
  convert1,
  convert2,
  convert3,
  convert4,
  toMoney,
};
