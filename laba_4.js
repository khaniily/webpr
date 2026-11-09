import { createServer } from 'node:http';
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    const menu = `
            <a href="/">Главная</a> | 
            <a href="/second">Вторая страница</a> 
    `;

    if (url === '/' && method === 'GET') {
        res.statusCode = 200;
        res.end(menu + '<div class="one">первая страничка:)</div>');
    } else if (url === '/second' && method === 'GET') {
        res.statusCode = 200;
        res.end(menu + '<div class="one"> вторая страничка!!</div>');
    } else {
        res.statusCode = 404;
        res.end(menu + '<div class="one">Ошибка 404: страница не найдена :(</div>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
