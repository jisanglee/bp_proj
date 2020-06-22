const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true, 
        unique:1
    },
    password:{
        type:String,
        maxlength:50
    },
    role:{
        type:Number,
        default:0
    },
    image:String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }

})
//이 스키마를 모델로 감싸줌

// 뒤에 파라미터 내용은 이 모델의 이름 : User ,스키마 userSchema
const User = mongoose.model('User',userSchema)

module.exports = {User}