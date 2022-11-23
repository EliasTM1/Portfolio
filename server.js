let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/portfolio'));

app.get('/*', (req, resp) => {
  resp.sendFile(__dirname+'/dist/portfolio/index.html');
});

app.listen(process.env.PORT || 4210);
