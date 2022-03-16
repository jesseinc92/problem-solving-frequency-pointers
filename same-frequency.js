function freqCounter (str) {
  const frequencies = {};
  for (let letter of str) {
    frequencies[letter] = (frequencies[letter] + 1) || 1;
  }
  return frequencies;
}

function sameFrequency(num1, num2) {
  const num1Str = num1.toString();
  const num2Str = num2.toString();

  if (num1Str.length !== num2Str.length) return false;

  const num1Freq = freqCounter(num1Str);
  const num2Freq = freqCounter(num2Str);

  for (let letter of Object.keys(num1Freq)) {
    if (num1Freq[letter] !== num2Freq[letter]) return false;
  }

  return true;
}
