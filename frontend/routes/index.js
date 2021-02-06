const path = require("path");
const express = require("express");
const Vue = require("vue");
const router = express.Router();
const renderer = require("vue-server-renderer").createRenderer({
  template: require("fs").readFileSync(path.join(path.dirname(__dirname), "index.template.html"), "utf-8")
});

/* GET home page. */
router.get("/", function(req, res) {
  const context = {
    title: "Kyle A. Carter",
    meta: ""
  };

  const app = new Vue({
    data: {
      url:  req.protocol + '://' + req.get('host') + req.originalUrl,
    },
    template: `<h1>Welcome to Vue Express</h1>
      <div>The visited URL is: {{ url }}</div>`,
  });

  renderer
    .renderToString(app, context, (err, html) => {
      if (err) {
        res.status(500).end("Internal Server Error")
        return;
      }
      res.end(html);
    });
});

module.exports = router;
