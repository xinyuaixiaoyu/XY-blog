const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')()
const json = require('koa-json')
const mongoose = require('mongoose');
const User = require('./dbmodel/users');

const app = new koa()

app.use(bodyParser({
	enableTypes: ['json', 'form', 'text'],
	"jsonLimit": '5mb',
	"formLimit": '5mb',
	"textLimit": '5mb'
}))

app.use(router.routes(), router.allowedMethods())

app.use(json())

app.listen(3000, _ => console.log(`app started at port 3000...`))

router.post('/login', async ctx => {
	const { name, password } = ctx.request.body;
	try {
		const res = await toRegister(name, password)
		ctx.body = {
			success: true,
			...res
		}
	} catch (error){
		ctx.body = {
			success: false,
			msg: error
		}
	}
})

function toRegister (name, password){
	return new Promise((resolve, reject) => {
		User.findOne({ name }, (err, result) => {
			if(result) reject('用户已存在')
			else {
				new User({
					name, password
				}).save().then(_ => resolve({name}))
			.catch(err => reject('注册失败' + err instanceof Object ? JSON.stringify(err) : err.toString()))
			}
		})
	})
}

mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true});