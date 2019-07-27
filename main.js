function myLoop() {
	let arr = [1,2,3,4,5];
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
		sum += arr[i];
		for(let j = 0; j < arr.length; j++){
			sum += arr[j];
		};
		while(sum < 100){
			sum += 1
		};
	};
}
