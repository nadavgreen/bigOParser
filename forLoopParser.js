const fs = require('fs');
const dataParser = require('./parseData.js');

(async function () {
	try {
		await fs.readFile('./es5/main.js', 'utf8', async (err, data) => {
			if(err) throw err;
			let parsedData = data.split('\n')
			parsedData = parsedData.join(' ')
			parsedData = parsedData.split('\t')
			parsedData = parsedData.join('')
			parsedData = parsedData.split(' ')
			dataParser(parsedData)
		});
	}
	catch (err) {
		console.log(err)
	}
})()
