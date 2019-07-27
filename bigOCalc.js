const funcStringParser = (funcStr) => {
	const funcObj = {
		name: '',
		loops: [],	
	};
	funcObj['name'] = funcNameIdentify(funcStr)
	funcObj['loops'] = loopStack(funcStr)
	console.log(funcStr)
	console.log(funcObj['loops'])
	//console.log(`The Big O notation of the function "${funcObj['name']}" is `)
}

const funcNameIdentify = (arr) => {
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
	let operation = false
	let open = false
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === 'for' || arr[i] === 'while'){
			stack.push(arr[i])
			operation = true
		}
		else if(arr[i] === '{' && operation){ 
			stack.push(arr[i])
			operation = false
			open = true
		}
		else if((arr[i] === '}' || arr[i] === '};') && open) {
			stack.push(arr[i])
			open = false
		}
	};
	return stack
}

module.exports = funcStringParser;
