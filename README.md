Install
=======
```
npm install --save express-queried
```

Usage
=====
```
const express = require("express");
const queried = require("express-queried");
const app = express();

app.get("/route", queried("foo"), (req, res) => {
    res.end(`foo set to: ${req.query.foo}`);
});

app.get("/route", (req, res) => {
    res.end(`foo not set`);
});
```
