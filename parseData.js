const dataParser = (func) => {
	const funcObj = {
		name: '',
		
	};
	funcObj['name'] = funcNameFinder(func)
	console.log(func)
	console.log(`The Big O notation of the function "${funcObj['name']}" is `)
}

const funcNameFinder = (arr) => {
	let name = '';
	for(let i = 0; i < arr.length; i++){
		if(arr[i-1] === 'function') name = parenRemove(arr[i]);
	}
	return name;
}

const parenRemove = (str) => {
	let newStr = '';
	for(let i = 0; i < str.length - 2; i++){
		newStr += str[i];
	};
	return newStr;
}

module.exports = dataParser;
