const express = require('express');
const httpProxy = require('http-proxy');

const router = express.Router();
const { DJANGO_HOST, DJANGO_PORT } = process.env;

const PROXY = httpProxy.createProxyServer({
  target: `http://${DJANGO_HOST}:${DJANGO_PORT}`,
  ws: true
});

/* GET users listing. */
router.get('/*', (req, res) => (
  PROXY.web(req, res, { target: `http://${DJANGO_HOST}:${DJANGO_PORT}` })
));

router.post('/*', (req, res) => (
  PROXY.web(req, res, { target: `http://${DJANGO_HOST}:${DJANGO_PORT}` })
));

module.exports = router;
