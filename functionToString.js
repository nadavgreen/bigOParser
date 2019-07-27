const fs = require('fs');
const funcStringParser = require('./bigOCalc.js');

(async function () {
	try {
		await fs.readFile('./es5/main.js', 'utf8', (err, data) => {
			if(err) throw err;
			let parsedData = data.split('\n');
			parsedData = parsedData.join(' ');
			parsedData = parsedData.split('\t');
			parsedData = parsedData.join('');
			parsedData = parsedData.split(' ');
			funcStringParser(parsedData);
		});
	}
	catch (err) {
		console.log(err);
	}
})()
