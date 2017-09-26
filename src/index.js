
let debug = require('debug')('app')
let koa = require('koa')

let koaBody = require('koa-body')

let routes = require('./routes/index');

let app = new koa()

app.use(koaBody({ multipart: true }))
app.use(routes())
app.listen(9002,()=>{
    debug('running')
})