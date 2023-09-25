const path = require('path');
const fs = require('fs');

const controller = {
	
    create: (req,res)=>{
        const ipAddr = { text } = req.body;
        if(!ipAddr){
            res.status(400).send({massage:'text is required.'})
            return;
        }
		
		const str1 = "plink -v "
		const str2 = " -l #name -pw #pass -ssh free -m"
		
		
		fs.writeFile("example\\ssh.bat", str1.concat(ipAddr.command).concat(str2), function(err) {
			if(err) {
				return console.log(err);
			}
			console.log("The file was saved!");
		}); 
		
		var spawn = require('child_process').spawn,
		ls    = spawn('cmd.exe',["/c", `example\\ssh.bat`],{env: process.env});

        ls.stdout.on('data', function (data) {
			console.log('********************************');
			console.log('stdout: ' + data);
		});

		ls.stderr.on('data', function (data) {
		console.log('stderr: ' + data);
		});

		ls.on('exit', function (code) {
		console.log('child process exited with code ' + code);
		});
		
        console.log(ipAddr);
		res.status(200).send(ipAddr)
    }
}

//export the module.
module.exports = controller;