/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 *
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
 *
 * algorithms
 * Easy (62.98%)
 * Total Accepted:    110.7K
 * Total Submissions: 175.7K
 * Testcase Example:  '"Let\'s take LeetCode contest"'
 *
 * Given a string, you need to reverse the order of characters in each word
 * within a sentence while still preserving whitespace and initial word order.
 * 
 * Example 1:
 * 
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 * 
 * 
 * 
 * Note:
 * In the string, each word is separated by single space and there will not be
 * any extra space in the string.
 * 
 */
/**
 * 反转字符串中的单词
 * - 拆分重组
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
  return s
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');

};
