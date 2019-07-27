const fs = require('fs');

(async function () {
	try {
		
		await fs.readFile('./main.js', async (err, data) => {
			if(err) throw err;
			await fs.writeFile('./es6/main.js', data, (err)=>{
				if(err) throw err;
			});
		});
	}
	catch (err) {
		console.log(err)
	}
})()
