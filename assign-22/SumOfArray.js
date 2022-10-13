let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
var i,
  sum1 = 0,
  sum2 = 0;
for (i = 0; i < arr_1.length; i++) {
  sum1 = sum1 + arr_1[i];
}
for (i = 0; i < arr_2.length; i++) {
  sum2 = sum2 + arr_2[i];
}
console.log(sum1 + sum2);
