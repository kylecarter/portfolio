const path = require("path");
const Vue = require("vue");
const VueRouter = require("vue-router");
const renderer = require("vue-server-renderer").createRenderer({
  template: require("fs").readFileSync(
    path.join(path.dirname(__dirname), "index.template.html"),
    "utf-8"
  ),
});

module.exports = function (req, res) {
  Vue.use(VueRouter);

  const context = {
    title: "Kyle A. Carter",
    meta: "",
  };

  const app = new Vue({
    router: new VueRouter({
      mode: "history",
      routes: require("../../src/router"),
    }),
  }).$mount("#v-container");

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      if (process.env.NODE_ENV !== "production") {
        console.log(err);
      }
      res.status(500).end("Internal Server Error");
      return;
    }
    res.end(html);
  });
};
