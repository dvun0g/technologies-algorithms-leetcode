// Time Limit

#include "string"
#include "algorithm"

using namespace std;

class Solution
{
public:
    int minInsertions(string s)
    {
        int n = s.length();
        return n - this->longestPalindromeSubstring(s, 0, n - 1);
    }

private:
    int longestPalindromeSubstring(string &s, int i, int j)
    {
        if (i > j)
        {
            return 0;
        }

        if (i == j)
        {
            return 1;
        }

        if (s[i] == s[j])
        {
            return 2 + this->longestPalindromeSubstring(s, i + 1, j - 1);
        }

        return max(this->longestPalindromeSubstring(s, i + 1, j), this->longestPalindromeSubstring(s, i, j - 1));
    }
};