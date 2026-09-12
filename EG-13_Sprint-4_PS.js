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

/********** 02. Word Pattern **********/
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false;

    const charToWord = {};
    const wordToChar = {};

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if ((charToWord[char] && charToWord[char] !== word) || (wordToChar[word] && wordToChar[word] !== char)) {
            return false;
        }

        charToWord[char] = word;
        wordToChar[word] = char;
    }

    return true;
};

// console.log(wordPattern("abba", "dog cat cat dog"));
// Expected Output: true


/********** 03. Find the Difference **********/
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let charCode = 0;
    for (let i = 0; i < t.length; i++) {
        charCode ^= t.charCodeAt(i);
    }
    for (let i = 0; i < s.length; i++) {
        charCode ^= s.charCodeAt(i);
    }
    return String.fromCharCode(charCode);
};

// console.log(findTheDifference("abcd", "abcde"));
// Expected Output: "e"

/********** 04. Reverse Linked List **********/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    return prev;
};

// function ListNode(val, next) { this.val = val === undefined ? 0 : val; this.next = next === undefined ? null : next; }
// const list4 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// console.log(reverseList(list4));
// Expected Output: ListNode { val: 5, next: ListNode { val: 4, ... } }

