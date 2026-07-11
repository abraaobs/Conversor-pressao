// Lógica pura de conversão de pressão — sem manipulação de DOM.
// Compartilhado entre o site (index.html) e os testes automatizados (Node).

const UNITS = {
  pa:   { label: "Pascal (Pa)",        toBase: v => v,            fromBase: v => v },
  kpa:  { label: "Quilopascal (kPa)",  toBase: v => v * 1000,     fromBase: v => v / 1000 },
  bar:  { label: "Bar",                toBase: v => v * 100000,  fromBase: v => v / 100000 },
  atm:  { label: "Atmosfera (atm)",    toBase: v => v * 101325,  fromBase: v => v / 101325 },
  psi:  { label: "PSI",                toBase: v => v * 6894.757, fromBase: v => v / 6894.757 },
  torr: { label: "Torr",               toBase: v => v * 133.322, fromBase: v => v / 133.322 },
  mmhg: { label: "mmHg",               toBase: v => v * 133.322, fromBase: v => v / 133.322 },
  kgfcm2: { label: "kgf/cm²",          toBase: v => v * 98066.5, fromBase: v => v / 98066.5 },
};

// Permite usar tanto no navegador (via <script src>) quanto no Node (via require)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { UNITS };
} else {
  window.UNITS = UNITS;
}