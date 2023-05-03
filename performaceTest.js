var ftdAndriw = function(s, t) {
    let sSorted = [];
    let tSorted = [];
     for (let i = 0; i < s.length; i++) {
         sSorted.push(s[i]);
     }
     for (let i = 0; i < t.length; i++) {
         tSorted.push(t[i]);
     }
     sSorted.sort();
     tSorted.sort();

     for (let i = 0; i < tSorted.length; i++) {
         if (sSorted[i] === tSorted[i]) {
             continue;
         } else return tSorted[i];
     }
};

function ftdAdrian(s, t) {
	const seen = {};

    for (let i = 0; i < s.length; i++) {
        if (seen[s[i]]) {
            seen[s[i]] += 1;
        } else {
            seen[s[i]] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!seen[t[i]]) return t[i];
        if (seen[t[i]]) {
            seen[t[i]]--;
        }
    }

}

const letters = "abcdefghijklmnopqrstuvwxyz";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


let input = new Array(500).fill(1).map(item => letters[getRandomInt(0, letters.length)]);
let inputTwo = [...input, "r"];
input = input.join("");
inputTwo = inputTwo.join("");

console.time("Andriw");
for (let i = 0; i < 10000; i++) {
	ftdAndriw(input, inputTwo);
}
console.timeEnd("Andriw");
console.time("Adrian");
for (let i = 0; i < 10000; i++) {
ftdAdrian(input, inputTwo);
}
console.timeEnd("Adrian");

