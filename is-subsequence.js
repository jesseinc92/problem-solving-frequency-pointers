function isSubsequence(str1, str2) {
  let str1left = 0;
  let str2left = 0;

  while (str2left <= str2.length) {
    if (str1left === str1.length) {
      return true;
    } else if (str1[str1left] === str2[str2left]) {
      str1left++;
      str2left++;
    } else {
      str2left++;
    }
  }
  return false;
}
