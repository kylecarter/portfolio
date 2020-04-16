const express = require('express');
const router = express.Router();
const page = require('../src/templates/Landing');

/* GET home page. */
router.get('/', function(req, res) {
  const html = page({
    meta: {
      title: "Kyle A. Carter"
    },
    content: "<h1>Hello World!</h1>"
  })
  res.send(html);
});

module.exports = router;
