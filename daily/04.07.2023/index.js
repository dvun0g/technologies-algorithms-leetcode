// Easy | Array + Bit Manipulation
// Идея задачи легкая если не учитывать условии линейной памяти O(1), с побитовыми операциями я не знаком, поэтому к сожалению за O(1) решить не удалось.

// Speed O(n), Space O(n), n = array.length
// Done | Beats Speed=45, Space=5
const singleNumber = function (array) {
	return Object.entries(
		array.reduce((acc, v) => {
			acc[v] = 1 + (acc[v] || 0);
			return acc;
		}, {})
	).find(([_, value]) => value === 1)[0];
};
