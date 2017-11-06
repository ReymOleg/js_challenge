function sumOfTwo(array1, array2, x) {
  for(var i in array1) {
    for(var j in array2) {
      if(array1[i] + array2[j] === x) {
        return true;
      }
    }
  }
  return false;
}

console.warn('task 1');

var array1 = [], array2 = [], x;
array1 = [1,2,3,4,5];
array2 = [100, 200, 300];
x = 103;
console.log(sumOfTwo(array1, array2, x));

array1 = [1,2,3,4,5];
array2 = [100, 200, 300];
x = 107;
console.log(sumOfTwo(array1, array2, x));