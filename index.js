var express = require('express')
var app = express()
var newSite = 'https://search.samalander.dev'

app.get('/',function(_,res) {
  res.sendFile(`${__dirname}/setup`)
});

app.get('/simpleSearch.exe',function(_,res) {
  res.sendFile(`${__dirname}/simpleSearch.html`)
});

app.get('/simpleSearch.crx',function(_,res) {
  res.sendFile(`${__dirname}/simpleSearch-crx.html`)
});

app.get('/setup',function(_,res) {
  res.sendFile(`${__dirname}/setup.html`)
});

app.get('/public*', function(req, res) {
  let page = req.originalUrl;
  res.sendFile(`${__dirname}${page}`);
});

app.get('*', function(req, res) {
  let page = req.originalUrl;
  res.sendFile(`${__dirname}${page}`);
});

app.listen(3000)
