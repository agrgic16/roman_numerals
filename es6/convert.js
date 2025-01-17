const ROMANS = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

const toHinduArabic = roman => {
  const toValue = (romanChar, i) => {
    const thisValue = ROMANS[romanChar];
    const nextValue = ROMANS[roman[i + 1]];
    return thisValue < nextValue ? -thisValue : thisValue;
  };

  const toSum = (a, b) => a + b;

  return [...roman].map(toValue).reduceRight(toSum);
};

module.exports = toHinduArabic;