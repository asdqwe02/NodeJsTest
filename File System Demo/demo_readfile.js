var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    // read 
    fs.readFile('demoReadFile.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

    // append 
    fs.appendFile('myNewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    })
    // Append "This is my text." to the end of the file "mynewfile1.txt":
    fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
        if (err) throw err;
        console.log('Updated!');
    });


    // open
    fs.open('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
    });

    // write
    fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    // The fs.writeFile() method replaces the specified file and content:
    fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
        if (err) throw err;
        console.log('Replaced!');
    });

    // delete
    // The fs.unlink() method deletes the specified file:
    fs.unlink('mynewfile2.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
    });

    // rename file
    // The fs.rename() method renames the specified file:
    fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
    });

}).listen(8080)
