function currentDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const fullyear = date.getFullYear();
  
    const dateFormat = fullyear + '-' + month + '-' + day;
    return dateFormat;
  }
  
  function randomNumber(limitNumber) {
    return Math.floor(Math.random() * limitNumber);
  }
  
  function generateValue(limitNumber) {
    const num1 = Math.floor(Math.random() * limitNumber);
    const num2 = Math.floor(Math.random() * 100);
  
    const float = num1 + '.' + num2;
  
    return float;
  }
  
  export { currentDate, randomNumber, generateValue };
  