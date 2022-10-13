function check_palindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let x = str[i];
    let y = str[j - i];
    if (x != y) {
      return false;
    }
  }
  return true;
}

function checking_palindrome(str) {
  // variable that is true if string is palindrome
  let ans = check_palindrome(str);
  //condition checking ans is true or not
  if (ans == true) {
    console.log("String 1 palindrom? yes ");
  } else {
    console.log("String 2 palindrom? no");
  }
}

let str3 = "racecar";
let str4 = "java";
checking_palindrome(str3);
checking_palindrome(str4);
