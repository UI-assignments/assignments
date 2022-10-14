function firstIsUppercase(str) {
    if (typeof str !== 'string' || str.length === 0) {
      return false;
    }
  
    if (str[0].toUpperCase() === str[0]) {
      return true;
    }
  
    return false;
  }
  
  console.log(firstIsUppercase('Hello'));  
  console.log(firstIsUppercase('world'));  
  
  if (firstIsUppercase('Hello')) {
    console.log('✅ First letter is uppercase')
  } else {
    console.log('⛔️ First letter is NOT uppercase')
  }