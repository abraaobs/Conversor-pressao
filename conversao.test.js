const test = require('node:test');
const assert = require('node:assert');
const { UNITS } = require('./conversao.js');

test('1 bar equivale a 100000 Pa', () => {
  assert.strictEqual(UNITS.bar.toBase(1), 100000);
});

test('1 atm equivale a 101325 Pa', () => {
  assert.strictEqual(UNITS.atm.toBase(1), 101325);
});

test('conversão de Pa de volta pra bar', () => {
  assert.strictEqual(UNITS.bar.fromBase(100000), 1);
});

test('1 bar para PSI é aproximadamente 14.5038', () => {
  const psi = UNITS.psi.fromBase(UNITS.bar.toBase(1));
  assert.ok(Math.abs(psi - 14.5038) < 0.001);
});

test('torr e mmhg são equivalentes', () => {
  assert.strictEqual(UNITS.torr.toBase(1), UNITS.mmhg.toBase(1));
});

test('Pascal para Pascal não altera o valor', () => {
  assert.strictEqual(UNITS.pa.toBase(50), 50);
  assert.strictEqual(UNITS.pa.fromBase(50), 50);
});
