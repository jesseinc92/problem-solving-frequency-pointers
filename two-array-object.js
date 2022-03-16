function twoArrayObject(keysArr, valuesArr) {
  const obj = {};
  for (let i = 0; i < keysArr.length; i++) {
    obj[keysArr[i]] = valuesArr[i] || null;
  }  
  return obj;
}
