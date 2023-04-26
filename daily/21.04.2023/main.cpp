// Time Limit
#include "vector"
#include "map"
#include "string"
#include "cmath"

using namespace std;

class Solution
{
public:
    int profitableSchemes(int n, int minProfit, vector<int> &group, vector<int> &profit) const
    {
        map<string, int> dp = {};
        int size = profit.size();
        int mod = static_cast<int>(pow(10, 9) + 7);

        function<int(int, int, int)> dfs = [&](int index, int currentGroup, int currentProfit)
        {
            if (index == size)
            {
                return currentProfit >= minProfit ? 1 : 0;
            }

            string key = to_string(index) + "|" + to_string(currentGroup) + "|" + to_string(currentProfit);

            if (dp.count(key))
            {
                return dp[key];
            }

            dp[key] = dfs(index + 1, currentGroup, currentProfit);

            if (currentGroup - group[index] >= 0)
            {
                dp[key] += dfs(index + 1, currentGroup - group[index], currentProfit + profit[index]);
            }

            return dp[key] % mod;
        };

        return dfs(0, n, 0);
    }
};
