const http = require('http');

http.createServer((req, res) =>{
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200,  { 'Content-Type': 'text/csv' });
    res.write('id, nombre\n');
    res.write('1, Juan\n');
    res.write('2, Nat\n');
    res.write('3, Ana\n');
    res.write('4, James\n');
    res.write('5, Sofi\n');
    res.end();
})
.listen(8080);