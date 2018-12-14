const koa = require('koa');
const app = new koa();
const bodyparser = require('koa-bodyparser');
const json = require('koa-json');
const views = require('koa-views');
const mongoose = require('mongoose');
const fs = require('fs');
const router = require('koa-router')()
const files = fs.readdirSync(__dirname + './controllers')
app.listen(3000)