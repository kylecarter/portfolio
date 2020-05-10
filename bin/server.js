const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const path = require("path");

const adminRouter = require("./routes/admin");
const apiRouter = require("./routes/api");
const clientRouter = require("./routes/router");

const app = express();
app.enable("trust proxy");
app.use(cookieParser());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const publicPath = path.join(__dirname, "../", "public");
app.use(express.static(publicPath));

app.use("/admin", adminRouter);
app.use("/api", apiRouter);
app.use("*", clientRouter.default);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  console.error(res.locals.error);

  const inform =
    req.app.get("env") === "development"
      ? `<pre>${err}</pre>`
      : "<p>This site is experiencing techincal difficulties. Please try visiting at a later date in time.</p>";

  // render the error page
  res.status(err.status || 500);
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Internal Server Error</title>
</head>
<body class="page-server-error">
  <main class="jumbotron">
    <h1>${err.status || 500} | Internal Server Error</h1>
    ${inform}
  </main>
</body>
</html>`);
});

module.exports = app;
