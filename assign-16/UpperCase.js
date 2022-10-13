var str = "javascript";
function toUpperCase(str) {
  return str
    .split("")
    .map((v, i) => (i % 2 == 0 ? v.toLowerCase() : v.replace(v,'Z')))
    .join("");
}
console.log(toUpperCase(str));
