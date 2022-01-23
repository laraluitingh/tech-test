function isAnagram(word1, word2) {
  arr1 = word1.split("");
  arr2 = word2.split("");
  if (arr1.length === arr2.length) {
    let state = true;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1.includes(arr2[i]) === false) {
        state = false;
        break;
      }
    }
    return state;
  } else {
    return false;
  }
}

console.log(isAnagram("silent", "listen"));
console.log(isAnagram("hello", "world"));
