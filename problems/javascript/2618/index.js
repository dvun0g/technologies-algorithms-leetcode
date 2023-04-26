const checkIfInstanceOf = function (obj, classFunction) {
	if (obj === undefined || classFunction === undefined) {
		return false;
	}

	while (obj !== null) {
		if (obj.constructor === classFunction) {
			return true;
		}

		obj = Object.getPrototypeOf(obj);
	}

    return false;
};

const obj = 5;
const classFunction = Number;

console.log(checkIfInstanceOf(obj, classFunction));
