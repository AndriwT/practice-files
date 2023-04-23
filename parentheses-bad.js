/**
 * @param {string} s
 * @return {boolean}
 */

 // ([{}])
 // {{}[}]]

var isValid = function(s) {
    const OPENING_BRACES = ["(", "{", "["];
    const CLOSING_BRACES = [")", "}", "]"];

    if (s.length <= 1) return false;
    if (s.length % 2) return false;

    let characterMap = {
        "(": ")",
        "{": "}",
        "[": "]",
        "]": "[",
        "}": "{",
        ")": "("
    }

    const seenOpeningBraces = {};

    // (){}}()
    // (])[
        
    // ( = 1
    for (let i = 0; i < s.length ; i++) {
        let character = s[i]; // (
        
        if (CLOSING_BRACES.includes(character))  {
            let matchingOpening = characterMap[character];
            if (!seenOpeningBraces[matchingOpening]) return false;
            seenOpeningBraces[matchingOpening]--
            continue;
        };

        if (seenOpeningBraces[character]) {
            seenOpeningBraces[character] += 1
        } else {
            seenOpeningBraces[character] = 1;
        }
       

        let closingCharacter = characterMap[character];

        let buffer = 0;
        let foundMatch = false;

        for (let j = i + 1; j < s.length; j++) {
            let match = s[j]; // "["
            if (OPENING_BRACES.includes(match)) {
                buffer += 1;
                continue;
            }

            if (buffer > 0) {
                buffer--;
                continue;
            }

            if (closingCharacter === match) {
                foundMatch = true;
            }

            break;
        
        }

        if (!foundMatch) return false;
    }

    return true;

};
