const http = require('http');


const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});

  const url = new URL(`https://${req.headers.host}${req.url}`);
  const params = url.searchParams;

  if(params.has('num1') && params.has('num2')){
    const num1 = params.get('num1');
    const num2 = params.get('num2');

    if(num1.match(/^\d+$/) && num2.match(/^\d+$/)){
      if(req.url.match(/^\/add\?/)){
        res.end(num1 + " + " + num2 + " = " + (Number(num1)+Number(num2)));
      } else if(req.url.match(/^\/sub\?/)){
        res.end(num1 + " - " + num2 + " = " + (Number(num1)-Number(num2)));
      } else if(req.url.match(/^\/mul\?/)){
        res.end(num1 + " * " + num2 + " = " + (Number(num1)*Number(num2)));
      } else if(req.url.match(/^\/div\?/)){
        res.end(num1 + " / " + num2 + " = " + (Number(num1)/Number(num2)));
      } else{
        res.end("Something wrong with  your link");
      }
    }else{
      res.end("num1 and num2 should be numbers");
    }
  } else{
    res.end("You forgot about num1 or num2");
  }
});

server.listen(8080);
