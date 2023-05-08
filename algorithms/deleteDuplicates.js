// Find and delete the duplicate values inside a given array.
// Example:
// Input - let arr = [1, 2, 5, 2, 1, 8];
// Expected output - [1, 2, 5, 8];

let array = [1, 2, 5, 2, 1, 8];

const deleteDuplicates = (arr) => {
  let output = [];

  let len = arr.length;

  for (let i = 0; i < len; i++) {
    if (output.indexOf(arr[i]) === -1) {
      output.push(arr[i]);
    }
  }

  console.log(output);
};

deleteDuplicates(array);
