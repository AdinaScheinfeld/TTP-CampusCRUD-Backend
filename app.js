const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.use('/api', require('./api'));

app.listen(8080, () => {
    console.log("Listening on port 8080");
})