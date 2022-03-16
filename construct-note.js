function freqCounter(str) {
  const frequencies = {};
  for (let char of str) {
    frequencies[char] = (frequencies[char] + 1) || 1;
  }
  return frequencies;
}

function constructNote(letters, message) {
  if (message.length < letters.length) return false;

  const lettersFreq = freqCounter(letters);
  const messageFreq = freqCounter(message);

  for (let letter of Object.keys(lettersFreq)) {
    if (lettersFreq[letter] > messageFreq[letter]) return false;
  }

  return true;
}