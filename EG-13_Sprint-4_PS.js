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

/********** 05. Middle of the Linked List **********/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

// function ListNode(val, next) { this.val = val === undefined ? 0 : val; this.next = next === undefined ? null : next; }
// const list5 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// console.log(middleNode(list5));
// Expected Output: ListNode { val: 3, next: ListNode { val: 4, ... } }

/********** 06. Product of Array Except Self **********/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const output = new Array(n).fill(1);

    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        output[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return output;
};

// console.log(productExceptSelf([1, 2, 3, 4]));
// Expected Output: [24, 12, 8, 6]

/********** 07. Remove Nth Node From End of List **********/
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = { val: 0, next: head };
    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return dummy.next;
};

// function ListNode(val, next) { this.val = val === undefined ? 0 : val; this.next = next === undefined ? null : next; }
// const list7 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// console.log(removeNthFromEnd(list7, 2));
// Expected Output: 1 -> 2 -> 3 -> 5

/********** 08. Find First and Last Position of Element in Sorted Array **********/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const findBound = (isFirst) => {
        let left = 0;
        let right = nums.length - 1;
        let bound = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                bound = mid;
                if (isFirst) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return bound;
    };

    return [findBound(true), findBound(false)];
};

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// Expected Output: [3, 4]

/********** 09. Permutation in String **********/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        count1[s1.charCodeAt(i) - 97]++;
        count2[s2.charCodeAt(i) - 97]++;
    }

    const matches = (c1, c2) => {
        for (let i = 0; i < 26; i++) {
            if (c1[i] !== c2[i]) return false;
        }
        return true;
    };

    for (let i = 0; i < s2.length - s1.length; i++) {
        if (matches(count1, count2)) return true;
        count2[s2.charCodeAt(i + s1.length) - 97]++;
        count2[s2.charCodeAt(i) - 97]--;
    }

    return matches(count1, count2);
};

// console.log(checkInclusion("ab", "eidbaooo"));
// Expected Output: true

/********** 10. Find All Anagrams in a String **********/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const result = [];
    if (s.length < p.length) return result;

    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);

    for (let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - 97]++;
        sCount[s.charCodeAt(i) - 97]++;
    }

    const isMatch = (arr1, arr2) => {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    };

    for (let i = 0; i < s.length - p.length; i++) {
        if (isMatch(sCount, pCount)) {
            result.push(i);
        }
        sCount[s.charCodeAt(i + p.length) - 97]++;
        sCount[s.charCodeAt(i) - 97]--;
    }

    if (isMatch(sCount, pCount)) {
        result.push(s.length - p.length);
    }

    return result;
};

// console.log(findAnagrams("cbaebabacd", "abc"));
// Expected Output: [0, 6]

