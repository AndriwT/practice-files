/**
 * @param {string} s
 * @return {boolean}
 */

 // ([{}])
 // {{}[}]]



var isValid = function(s) {
    const stack = [];

    if (s.length <= 1) return false;
    const OPENING_CHARS = ["{", "(", "["];
    const map = {
        "{": "}",
        "(": ")",
        "[": "]"
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
     
        if (OPENING_CHARS.includes(char)) {
            let match = map[char];
            stack.push(match);
            continue;
        }

        const lastAdded = stack.pop();
        if (char !== lastAdded) return false;
    }

    if (stack.length) return false;

    return true;

};
