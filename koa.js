const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')()
const json = require('koa-json')
const mongoose = require('mongoose');
const User = require('./dbmodel/users');
const cors = require('koa2-cors');

const app = new koa()

app.use(cors())

app.use(bodyParser({
	enableTypes: ['json', 'form', 'text'],
	"jsonLimit": '5mb',
	"formLimit": '5mb',
	"textLimit": '5mb'
}))

app.use(router.routes(), router.allowedMethods())

app.use(json())

app.listen(8888, _ => console.log(`app started at port 3000...`))

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

function toRegister (name, password) {
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

router.post('/userList', async ctx => {
	const { current, pageSize	} = ctx.request.body;
	try {
		const res = await User.find().limit(Number(pageSize)).skip((current-1)*Number(pageSize))
		const totalRes = await User.find({})
		ctx.body = {
			code: 200,
			success: true,
			total: totalRes.length,
			data: [...res],
			page: current,
			pageSize: pageSize
		}
	} catch (err) {
		ctx.body = {
			success: false,
			msg: err
		}
	}
})

mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true});