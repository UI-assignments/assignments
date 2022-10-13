var arr_1 = [4, 6, 7];
var arr_2 = [8, 1, 9];

var sum = arr_1.map(function (num, idx) {
  return num + arr_2[idx];
});
console.log(sum);
