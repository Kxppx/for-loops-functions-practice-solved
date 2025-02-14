// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let arr = [];
  for (let obj of array) {
    for (let i = 0; i < obj.name.length; i++) {
      if (obj.name[i].toLowerCase() === letter.toLowerCase()) {
        arr.push(obj.name);
        break;
      }
    }
  }
  return arr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
