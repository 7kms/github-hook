let Router = require('koa-router')
// let debug = require('debug')('pyload')
let router = new Router();
let verify = require('../controlers/token').verify
let jobs = require('../jobs')
router.post('/pyload/:name',verify, async (ctx,next)=>{
    let {name} = ctx.params;
    let {ref} = ctx.request.body;
    if(ref){
        jobs.run(name,ref);
    }
    ctx.status = 200;
    ctx.body={msg:'ok'}
})

router.use(router.allowedMethods())
module.exports = ()=>{
    return router.routes()
}