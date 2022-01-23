function flatten(arr) {
  const flattenArray = arr.reduce((accum, curVal) => {
    return accum.concat(curVal);
  }, []);

  return flattenArray;
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays));
