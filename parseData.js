const dataParser = (funcStr) => {
	const funcObj = {
		name: '',
		loops: [],	
	};
	funcObj['name'] = funcNameFinder(funcStr)
	funcObj['loops'] = loopStack(funcStr)
	console.log(funcStr)
	console.log(funcObj['loops'])
	//console.log(`The Big O notation of the function "${funcObj['name']}" is `)
}

const funcNameFinder = (arr) => {
	let name = '';
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === 'function') {
			name = parenRemove(arr[i+1]);
			break;
		};
	};
	return name;
}

const parenRemove = (str) => {
	let newStr = '';
	for(let i = 0; i < str.length - 2; i++){
		if(str[i] !== '(') newStr += str[i];
		else break;
	};
	return newStr;
}

const loopStack = (arr) => {
	let stack = [];
	let forOp = false
	let open = false
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === 'for'){
			stack.push(arr[i])
			forOp = true
		}
		else if(arr[i] === '{' && forOp){ 
			stack.push(arr[i])
			forOp = false
			open = true
		}
		else if((arr[i] === '}' || arr[i] === '};') && open) {
			stack.push(arr[i])
			open = false
		}
	};
	return stack
}

module.exports = dataParser;
