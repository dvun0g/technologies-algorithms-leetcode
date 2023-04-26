function canEatAll(piles, hours, speed) {
	let time = 0;
	for (const value of piles) {
		time += Math.ceil(value / speed);
		if (time > hours) return false;
	}

	return true;
}

function minEatingSpeed(piles, hours) {
	let start = 1;
	let end = Math.max(...piles);

	while (start <= end) {
		const middleSpeed = start + Math.floor((end - start) / 2);
		if (canEatAll(piles, hours, middleSpeed)) {
			end = middleSpeed - 1;
		} else {
			start = middleSpeed + 1;
		}
	}

	return start;
}
