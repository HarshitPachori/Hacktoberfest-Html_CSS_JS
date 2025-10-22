/**
 * Title: 242. Valid Anagram [LeetCode]
 *
 * Problem Link: https://leetcode.com/problems/valid-anagram/
 *
 * Description:
 * Given two strings `s` and `t`, check if `t` is an anagram of `s`.
 * An anagram means both strings contain the same characters
 * with the same frequency but possibly in a different order.
 *
 * Example:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Algorithm:
 * 1. If lengths are different → directly return false.
 * 2. Create a frequency array of size 26 for all lowercase letters.
 * 3. For every index `i`, increase count for `s[i]` and decrease for `t[i]`.
 * 4. After traversing both strings, check if all counts are zero.
 * 5. If yes → both are anagrams, else not.
 *
 * -----------------------------------------------------------
 * Time Complexity: O(N) — iterate once through both strings.
 * Space Complexity: O(1) — uses a fixed-size array of 26 letters.
 * -----------------------------------------------------------
 */
class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) {
            return false;
        }
        vector<int> counts(26,0);
        for (int i = 0; i < s.length(); ++i) {
            // increment count for character in s & decrement for t
            counts[s[i] - 'a']++;
            counts[t[i] - 'a']--;
        }
        for (int count : counts) {
            // check if all character counts net to zero
            if (count != 0) {
                return false;
            }
        }
        return true;  // all counts are zero, so it is an anagram..
    }
};
