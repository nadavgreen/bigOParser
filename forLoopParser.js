const fs = require('fs');
const dataParser = require('./parseData.js')

(async function () {
	try {
		await fs.readFile('./es5/main.js', 'utf8', async (err, data) => {
			if(err) throw err;
			console.log(data)
		});
	}
	catch (err) {
		console.log(err)
	}
})()
