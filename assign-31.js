function dateIsValid(dateStr) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
  
    if (dateStr.match(regex) === null) {
      return false;
    }
  
    const date = new Date(dateStr);
  
    const timestamp = date.getTime();
  
    if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
      return false;
    }
  
    return date.toISOString().startsWith(dateStr);
  }
  
  console.log(dateIsValid('2022-01-24')); 
  console.log(dateIsValid('2022-01-35')); 
  console.log(dateIsValid('hello')); 