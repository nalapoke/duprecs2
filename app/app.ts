import express = require('express');
let app = express();

app.get('/', (request, response) => {
    response.json('duprecs');
});

app.listen(3000, () => console.log('Express server listening on port 3000'));
