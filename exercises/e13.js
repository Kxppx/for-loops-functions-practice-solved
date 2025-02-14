// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let arr = [];
  for (let obj of array) {
    if (!obj.deposits) {
      arr.push(obj);
    } else {
      let sum = 0;
      for (let i = 0; i < obj.deposits.length; i++) {
        sum += obj.deposits[i];
      }
      if (sum < 2000) {
        arr.push(obj);
      }
    }
  }
  return arr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
