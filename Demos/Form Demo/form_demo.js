var formidable = require('formidable');
var http = require('http');
var fs = require('fs');




http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.filepath;
            var newpath = './' + files.filetoupload.originalFilename;
            fs.copyFile(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                console.log('File uploaded and moved!')
                fs.unlink(oldpath, (err) => {
                    if (err) throw err;
                    res.end();
                });
            })
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
    return res.end();
}).listen(8080);