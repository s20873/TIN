const fs = require('fs');
const dir = process.argv.slice(2)[0]; //path to directory passed as an argument from the terminal

if (fs.existsSync(dir)) {
    fs.watch(dir, (eventType, filename) => {
        fs.readFile(`${dir}/${filename}`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            console.log("\nThe file", filename, "was modified!");
            console.log("\tContent:\n");
            console.log(data);
        });
    });
} else {
    console.log('Directory is not found');
}
