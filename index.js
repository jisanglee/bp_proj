const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser')

const config = require('./config/key')

const { User } = require('./models/User') 

//바디파서가 클라에서 오는 정보를 서버에서 분석해서 가져올수있도록 해주는것.
//application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({extended:true}));
//application/json타입의 데이터를 분석해서 가져올수있도록.
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err))
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/register',(req,res)=>{
    //회원 가입 할 때 필요한 정보들을 클라이언트에서 가져오면 그것들ㅇ믈 데이터베이스에 넣어준다.
    const user = new User(req.body) //json형식으로.json형식으로 해주는게 바디파서.
    //정보가 유저 모델에 저장 그리고나서 콜백탐
    user.save((err,userInfo)=>{
        if(err) return res.json({success:false,err})
        return res.status(200).json({
            success:true
        })
    }) 
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
