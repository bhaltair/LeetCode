/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.08%)
 * Total Accepted:    601.9K
 * Total Submissions: 2.4M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 * 
 */
/**
 * 反转数字
 * 1. 带正负号的云翔可以用 1、-1 做 sign
 * 2. 然后正常的反转、翻转后 * sign
 * 3. 无聊的越界判断
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const sign = (x > 0) ? 1 : -1;
  x = Math.abs(x);
  const str = x.toString().split('').reverse().join('');
  const result = sign * Number(str);
  if (result > 2147483647 || result < -2147483648) return 0;
  
  return result;
};
