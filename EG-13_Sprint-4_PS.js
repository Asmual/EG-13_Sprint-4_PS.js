/********** 01. Isomorphic Strings **********/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    const mapS = {};
    const mapT = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if ((mapS[charS] && mapS[charS] !== charT) || (mapT[charT] && mapT[charT] !== charS)) {
            return false;
        }

        mapS[charS] = charT;
        mapT[charT] = charS;
    }

    return true;
};

// console.log(isIsomorphic("egg", "add"));
// Expected Output: true
