maxRecurringChar("aabacada");

function maxRecurringChar(characters) {
  let obj = {};
  const arr = characters.split("");

  for (letter of arr) {
    if (letter in obj) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }

  const arrValue = Object.values(obj);
  let maxCount = Math.max(...arrValue);
  console.log(maxCount);

  const arrKey = Object.keys(obj);

  const property = arrKey.find((key) => obj[key] === maxCount);

  console.log(property);
}
