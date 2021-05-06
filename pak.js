'use strict'
const express = require('express')
const app = express()
const config = require('./config')
const mysql = require('mysql2/promise')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false})
const gen = require('./gen_pass')
const crypto = require('crypto')
var passwordHash = require('password-hash')

app.set('view engine', 'ejs')

app.get('/parser', function(req,res){
	main_two()
	global.password = gen()
	let message = ''

	let pass = global.pass
	if (typeof pass == 'undefined'){
		pass = false
	}
	//console.log(pass)
	res.render('parser',{password: password,message: message,pass: pass})
})

app.get('/some', function(req,res){
	setTimeout(()=>{
		let pass = global.pass
		let password = global.password
		let username = global.username
		
		
		let secondname = global.secondname
		let thirtname = global.thirtname
		let passport = global.passport
		
		let firstname = global.firstname
		let message = ''

		if(typeof username == 'undefined' || typeof firstname == 'undefined' || typeof secondname == 'undefined' || typeof thirtname == 'undefined' || typeof passport == 'undefined'){
			username = ''
			firstname = ''
			secondname = '''use strict'
const express = require('express')
const app = express()
const config = require('./config')
const mysql = require('mysql2/promise')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false})
const gen = require('./gen_pass')
const crypto = require('crypto')
var passwordHash = require('password-hash')

app.set('view engine', 'ejs')

app.get('/parser', function(req,res){
	main_two()
	global.password = gen()
	let message = ''

	let pass = global.pass
	if (typeof pass == 'undefined'){
		pass = false
	}
	//console.log(pass)
	res.render('parser',{password: password,message: message,pass: pass})
})

app.get('/some', function(req,res){
	setTimeout(()=>{
		let pass = global.pass
		let password = global.password
		let username = global.username
		
		
		let secondname = global.secondname
		let thirtname = global.thirtname
		let passport = global.passport
		
		let firstname = global.firstname
		let message = ''

		if(typeof username == 'undefined' || typeof firstname == 'undefined' || typeof secondname == 'undefined' || typeof thirtname == 'undefined' || typeof passport == 'undefined'){
			username = ''
			firstname = ''
			secondname = ''
			thirtname = ''
			passport = ''
			password = ''
		}
		else{
			initial(username)
		}
		
		
		res.render('some',{message: message,pass: pass,password: password,username: username,firstname: firstname,secondname: secondname,thirtname: thirtname,passport: passport})
	},1000)
})


app.get('/login', function(req,res){
	let pass = global.pass
	if (typeof pass == 'undefined'){
		pass = false
	}
	let message = ''
	//login_check('bab','p')
	let log_check = global.log_check
	global.log_check = false
	res.render('login',{pass: pass,message: message})
})


app.get('/logout', function(req,res){
	global.pass = false
	let message = ''
	//login_check('bab','p')
	let log_check = global.log_check
	global.log_check = false
	res.render('login',{pass: pass,message: message})
})

//app.post('/profile', urlencodedParser, function(req,res){

//})

app.post('/change', urlencodedParser, function(req,res){
	let user = global.user

	let change_username = req.body.username
	let change_firstname = req.body.firstname
	let change_secondname = req.body.secondname
	let change_thirtname = req.body.thirtname
	let change_passport = req.body.passport
	let change_password = passwordHash.generate(password)
	let username = global.username
	let firstname = global.firstname
	let secondname = global.secondname
	let thirtname = global.thirtname
	let passport = global.passport

	main_two()

	

	console.log(a)



	if(change_username==''){
		change_username = username 
	}
	if(change_firstname==''){
		change_firstname = firstname 
	}
	if(change_secondname==''){
		change_secondname = secondname
	}
	if(change_thirtname==''){
		change_thirtname = thirtname
	}
	if(change_passport==''){
		change_passport = passport
	}
	if(change_password==''){
		change_password = password
	}

	let index = a.indexOf(change_username)
	//a.splice(index,1)
	//a.pop(index)
	let bor = a.includes(change_username)
	console.log(bor, username)

	setTimeout(()=>{

		if(bor == true){
			let message = '* this username is already used'
			change_username = username

			res.render('some',{message: message,username: change_username,firstname: change_firstname,secondname: change_secondname,thirtname: change_thirtname,passport: change_passport,password: password})
		}

		else{
			//let a = global.a
			a.splice(index,1)
			a.push(change_username)
			global.a = a
			
			
			console.log(a)
			change(change_username,change_firstname,change_secondname,change_thirtname,change_passport,change_password)
			console.log(change_username,change_firstname,change_secondname,change_thirtname,change_passport,change_password)
			setTimeout(()=>{
				initial(change_username)
				main_two()
				res.render('some',{username: change_username,firstname: change_firstname,secondname: change_secondname,thirtname: change_thirtname,passport: change_passport,password: password})
			},2000)
		}

	},2000)



})


app.post('/generate',urlencodedParser,function(req,res){
	global.password = gen()
	let message = ''
	let pass = global.pass
	res.redirect('some')
	//res.render('some',{password: password,message: message,pass: pass})
})



app.post('/gen',urlencodedParser,function(req,res){
	global.password = gen()
	let message = ''
	let pass = false
	res.render('parser',{password: password,message: message,pass: pass})
})




app.post('/parser',urlencodedParser, function(req,res){
	main_two()
	///let a = global.a
	let id = a.length + 1

	let username = req.body.username
	let firstname = req.body.firstname
	let secondname = req.body.secondname
	let thirtname = req.body.thirtname
	let passport = req.body.passport.toString()
	//let passwordd = req.body.password
	let pasword = passwordHash.generate(password)
	let message = ''

	let bruh = a.includes(username)
	console.log(a)
	//console.log(password)



	if(bruh==true){
		message = '* this username is already used'
		console.log('no ok')
		global.pass = false
		res.render('parser',{message:message,pass: pass})

	}
	else{
		if(passport.length==10 && firstname!='' && secondname!='' && thirtname!=''){
			setTimeout(()=>{
                            global.pass = true
			    global.username = username
			    global.firstname = firstname
			    global.secondname = secondname
			    global.thirtname = thirtname
			    global.passport = passport
			    global.password = password
			    global.message = ''

			
			    //global.password = password
			    main(id,username,firstname,secondname,thirtname,passport,pasword)
			    a = global.a
			    a.push(username)
			    let user = global.user
			    res.redirect('some')
                        },2000) 
		}
		else{
			global.pass = false
			message = '* fill error'
			res.render('parser',{message: message,pass: pass})
		}
	}
})


//let log_check = global.log_check


app.post('/login', urlencodedParser, function(req,res){
	//let log_check = global.log_check

	let a = global.a
	console.log(a)
	

	let pass = false
	let username = req.body.username
	let password = req.body.password
	let message = ''
	//log_check = log_check
	main_two()
	let bor = a.includes(username)

	if(username!='' && password!=''){
		global.username = username
		
		global.password = password
		
		//res.render('login',{pass: pass})
		
		if(bor==false){
			global.pass = false
			message = '* invalid username'
			res.render('login',{pass: pass,message: message})
		}
		else{
			login_check(username,password)

			setTimeout(()=>{

				let log_check = global.log_check

			
				if(log_check==true){
					global.pass = true
					initial(username)
					global.message = ''
					res.redirect('some')
				}
				else{
					global.pass = false
					message = '* invalid password'
					res.render('login',{pass: pass,message: message})
			}},2000)
		}
	}
	else{

		global.pass = false
		message = '* invalid password'
		res.render('login',{pass: pass,message: message})
	}
	

	//message = message
	//res.render('login',{pass: pass,message: message})

})


async function change(usernamee,firstname,secondname,thirtname,passport,password){
	const conn = await mysql.createConnection(config)
	const [res] = await conn.execute('select * from upop')
	const [rop] = await conn.execute('select count(*) from upop')

	let username = global.username
	const [user] = await conn.execute('select * from upop where username="'+username+'"')
	global.user = user
	

	await conn.execute('update upop set username="'+usernamee+'", firstname="'+firstname+'", secondname="'+secondname+'", thirtname="'+thirtname+'", passport="'+passport+'", password="'+password+'" where username="'+username+'"')
	//console.log(user[0]['username'])
	//console.log(user[0]['password'])
	//global.log_check = passwordHash.verify(password, user[0]['password'])

}


//6w3pw3jqoh


async function login_check(username,password){
	const conn = await mysql.createConnection(config)
	const [res] = await conn.execute('select * from upop')
	const [rop] = await conn.execute('select count(*) from upop')

	const [user] = await conn.execute('select * from upop where username="'+username+'"')

	global.user = user

	global.log_check = passwordHash.verify(password, user[0]['password'])

}




async function initial(username){
	const conn = await mysql.createConnection(config)
	const [res] = await conn.execute('select * from upop')
	const [rop] = await conn.execute('select count(*) from upop')

	const [user] = await conn.execute('select * from upop where username="'+username+'"')

	global.firstname = user[0]['firstname']
	global.secondname = user[0]['secondname']
	global.thirtname = user[0]['thirtname']
	global.passport = user[0]['passport']
	let password = global.password
	global.password = password

}



async function main(id,username,firstname,secondname,thirtname,passport,pasword){
	const conn = await mysql.createConnection(config)
	const [res] = await conn.execute('select * from upop')
	const [rop] = await conn.execute('select count(*) from upop')
	//let a = []
	//for(let i=0;i<rop[0]['count(*)'];i++){
	//	a.push(res[i]['username'])
	//}
	//global.a = a
	const [user] = await conn.execute('select * from upop where username="'+username+'"')

	global.user = user

	await conn.execute('insert into upop values ("'+id+'","'+username+'","'+firstname+'","'+secondname+'","'+thirtname+'","'+passport+'","'+pasword+'")')

	conn.end()
}


async function main_two(){
	const conn = await mysql.createConnection(config)
	const [res] = await conn.execute('select * from upop')
	const [rop] = await conn.execute('select count(*) from upop')
	let a = []
	for(let i=0;i<rop[0]['count(*)'];i++){
		a.push(res[i]['username'])
	}
	global.a = a


	//await conn.execute('insert into upop values ("'+id+'","'+username+'","'+firstname+'","'+pasword+'")')

	conn.end()
}

main_two()
//main(id,username,firstname,pasword)

app.listen(3000,()=>{
	console.log('server is running')
})
			thirtname = ''
			passport = ''
			password = ''
		}
		else{
			initial(username)
		}
		
		
		res.render('some',{message: message,pass: pass,password: password,username: username,firstname: firstname,secondname: secondname,thirtname: thirtname,passport: passport})
	},1000)
})


app.get('/login', function(req,res){
	let pass = global.pass
	if (typeof pass == 'undefined'){
		pass = false
	}
	let message = ''
	//login_check('bab','p')
	let log_check = global.log_check
	global.log_check = false
	res.render('login',{pass: pass,message: message})
})


app.get('/logout', function(req,res){
	global.pass = false
	let message = ''
	//login_check('bab','p')
	let log_check = global.log_check
	global.log_check = false
	res.render('login',{pass: pass,message: message})
})

//app.post('/profile', urlencodedParser, function(req,res){

//})

app.post('/change', urlencodedParser, function(req,res){
	let user = global.user
	//console.log(user)
	//let pass = global.pass

	let change_username = req.body.username
	let change_firstname = req.body.firstname
	let change_secondname = req.body.secondname
	let change_thirtname = req.body.thirtname
	let change_passport = req.body.passport
	//if (pass = true){
	let change_password = passwordHash.generate(password)
	//}
	//else{
		//let change_password = ''
	//}
	
	let username = global.username
	let firstname = global.firstname
	let secondname = global.secondname
	let thirtname = global.thirtname
	let passport = global.passport

	main_two()

	

	console.log(a)



	if(change_username==''){
		change_username = username //user[0]['username']
	}
	if(change_firstname==''){
		change_firstname = firstname //user[0]['firstname']
	}
	if(change_secondname==''){
		change_secondname = secondname//user[0]['secondname']
	}
	if(change_thirtname==''){
		change_thirtname = thirtname//user[0]['thirtname']
	}
	if(change_passport==''){
		change_passport = passport//user[0]['passport']
	}
	if(change_password==''){
		change_password = password//user[0]['password']
	}

	let index = a.indexOf(change_username)
	//let test_list = a
	a.splice(index,1)
	let bor = a.includes(change_username)
	console.log(bor, username)

	setTimeout(()=>{

		if(bor == true){
			let message = '* this username is already used'
			change_username = username

			res.render('some',{message: message,username: change_username,firstname: change_firstname,secondname: change_secondname,thirtname: change_thirtname,passport: change_passport,password: password})
		}

		else{
			//let a = global.a
			//a.push(change_username)
			//global.a = a
			
			
			console.log(a)
			//change_username = user[0]['username']
			change(change_username,change_firstname,change_secondname,change_thirtname,change_passport,change_password)
			console.log(change_username,change_firstname,change_secondname,change_thirtname,change_passport,change_password)
			initial(change_username)
			main_two()
			res.render('some',{username: change_username,firstname: change_firstname,secondname: change_secondname,thirtname: change_thirtname,passport: change_passport,password: password})
			//6fjn2kea2uv
		}

	},1000)



})


app.post('/generate',urlencodedParser,function(req,res){
	global.password = gen()
	let message = ''
	let pass = global.pass
	res.redirect('some')
	//res.render('some',{password: password,message: message,pass: pass})
})



app.post('/gen',urlencodedParser,function(req,res){
	global.password = gen()
	let message = ''
	let pass = false
	res.render('parser',{password: password,message: message,pass: pass})
})




app.post('/parser',urlencodedParser, function(req,res){
	main_two()
	///let a = global.a
	let id = a.length + 1

	let username = req.body.username
	let firstname = req.body.firstname
	let secondname = req.body.secondname
	let thirtname = req.body.thirtname
	let passport = req.body.passport.toString()
	//let passwordd = req.body.password
	let pasword = passwordHash.generate(password)
	let message = ''

	let bruh = a.includes(username)
	console.log(a)
	//console.log(password)



	if(bruh==true){
		message = '* this username is already used'
		console.log('no ok')
		global.pass = false
		res.render('parser',{message:message,pass: pass})

	}
	else{
		if(passport.length==10 && firstname!='' && secondname!='' && thirtname!=''){
			setTimeout(()=>{
                            global.pass = true
			    global.username = username
			    global.firstname = firstname
			    global.secondname = secondname
			    global.thirtname = thirtname
			    global.passport = passport
			    global.password = password
			    global.message = ''

			
			    //global.password = password
			    main(id,username,firstname,secondname,thirtname,passport,pasword)
			    a = global.a
			    let user = global.user
			    res.redirect('some')
                        },2000) 
		}
		else{
			global.pass = false
			message = '* fill error'
			res.render('parser',{message: message,pass: pass})
		}
	}
})


//let log_check = global.log_check


app.post('/login', urlencodedParser, function(req,res){
	//let log_check = global.log_check
	

	let pass = false
	let username = req.body.username
	let password = req.body.password
	let message = ''
	//log_check = log_check
	main_two()
	let bor = a.includes(username)

	if(username!='' && password!=''){
		global.username = username
		
		global.password = password
		
		//res.render('login',{pass: pass})
		
		if(bor==false){
			global.pass = false
			message = '* invalid username'
			res.render('login',{pass: pass,message: message})
		}
		else{
			login_check(username,password)

			let log_check = global.log_check

			setTimeout(()=>{
				if(log_check==true){
					global.pass = true
					initial(username)
					global.message = ''
					res.redirect('some')
				}
				else{
					global.pass = false
					message = '* invalid password'
					res.render('login',{pass: pass,message: message})
			}},2000)
		}
	}
	else{

		global.pass = false
		message = '* invalid password'
		res.render('login',{pass: pass,message: message})
	}
	

	//message = message
	//res.render('login',{pass: pass,message: message})

})


async function change(usernamee,firstname,secondname,thirtname,passport,password){
	const conn = await mysql.createConnection(config)
	const [res] = await conn.execute('select * from upop')
	const [rop] = await conn.execute('select count(*) from upop')

	let username = global.username
	const [user] = await conn.execute('select * from upop where username="'+username+'"')
	global.user = user
	

	await conn.execute('update upop set username="'+usernamee+'", firstname="'+firstname+'", secondname="'+secondname+'", thirtname="'+thirtname+'", passport="'+passport+'", password="'+password+'" where username="'+username+'"')
	//console.log(user[0]['username'])
	//console.log(user[0]['password'])
	//global.log_check = passwordHash.verify(password, user[0]['password'])

}


//6w3pw3jqoh


async function login_check(username,password){
	const conn = await mysql.createConnection(config)
	const [res] = await conn.execute('select * from upop')
	const [rop] = await conn.execute('select count(*) from upop')

	const [user] = await conn.execute('select * from upop where username="'+username+'"')

	global.user = user

	global.log_check = passwordHash.verify(password, user[0]['password'])


	//global.log_check = log_check
	//console.log(log_check)

	
	

}




async function initial(username){
	const conn = await mysql.createConnection(config)
	const [res] = await conn.execute('select * from upop')
	const [rop] = await conn.execute('select count(*) from upop')

	const [user] = await conn.execute('select * from upop where username="'+username+'"')

	global.firstname = user[0]['firstname']
	global.secondname = user[0]['secondname']
	global.thirtname = user[0]['thirtname']
	global.passport = user[0]['passport']
	let password = global.password
	global.password = password

	//let log_check = true
	//const log_check = passwordHash.verify(password, user[0]['password'])

	//global.log_check = log_check
	//console.log(log_check)

	
	

}


//login_check('dava','where')



async function main(id,username,firstname,secondname,thirtname,passport,pasword){
	const conn = await mysql.createConnection(config)
	const [res] = await conn.execute('select * from upop')
	const [rop] = await conn.execute('select count(*) from upop')
	//let a = []
	//for(let i=0;i<rop[0]['count(*)'];i++){
	//	a.push(res[i]['username'])
	//}
	//global.a = a
	const [user] = await conn.execute('select * from upop where username="'+username+'"')

	global.user = user

	await conn.execute('insert into upop values ("'+id+'","'+username+'","'+firstname+'","'+secondname+'","'+thirtname+'","'+passport+'","'+pasword+'")')

	conn.end()
}


async function main_two(){
	const conn = await mysql.createConnection(config)
	const [res] = await conn.execute('select * from upop')
	const [rop] = await conn.execute('select count(*) from upop')
	let a = []
	for(let i=0;i<rop[0]['count(*)'];i++){
		a.push(res[i]['username'])
	}
	global.a = a


	//await conn.execute('insert into upop values ("'+id+'","'+username+'","'+firstname+'","'+pasword+'")')

	conn.end()
}

main_two()
//main(id,username,firstname,pasword)

app.listen(3000,()=>{
	console.log('server is running')
})
