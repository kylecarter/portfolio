/**
 * @TODO: Dynamic Meta tags 
 * <meta name="description" content="DESCRIPTION OF PAGE CONTENT" />
 * <meta property="og:description" content="DESCRIPTION OF PAGE CONTENT" />
 * <meta property="og:image" content="LINK TO THE IMAGE FILE" />
 * <meta property="og:url" content="PERMALINK" />
 * <link rel="canonical" href="PERMALINK" />
 */
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.dirname(__dirname), "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
