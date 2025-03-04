
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  let arr = [];
  for (let obj of array) {
    if (obj.deposits) {
      for (let i = 0; i < obj.deposits.length; i++) {
        if (obj.deposits[i] > 100) {
          arr.push(obj.deposits[i]);
        }
      }
    }
  }
  return arr;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
