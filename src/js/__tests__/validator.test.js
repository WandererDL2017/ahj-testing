import validateCardNumber from '../validator';

test.each([
  ['true for valide mir card number', '2200901679004914', true],
  ['true for valide diners club card number', '30250751443412', true],
  ['true for valide jcb card number', '3528358136669354', true],
  ['true for valide american express card number', '371314206597318', true],
  ['true for valide visa card number', '4539952343084319', true],
  ['true for valide mastercard number', '5549511103913896', true],
  ['true for valide discover card number', '6011391528760132', true],
  ['false for invalide card number', '0010111100001111', false],
  ['false for invalide card number', '1234', false],
  ['false for string instead of number', 'номер', false],
])(('it should be %s'), (_, num, expected) => {
  expect(validateCardNumber(num)).toBe(expected);
});
