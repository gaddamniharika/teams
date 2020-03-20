const express = require('express');
const app = express();

const conn = require('./Database/db.js');
conn.connect();
const bodyparse = require('body-parser');

app.use(bodyparse.json());
const router = require('./route/getUser.js');
app.use(router);

app.listen(2000,()=>console.log("port listening on 2000"));