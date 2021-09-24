const m = require('mongoose')
const scoreSchema = new m.Schema({
    name : {type:String , required: true},
    course : {type:String , required: true},
    email : {type:String , required: true},
    number : {type:String , required: true}
})
module.exports = m.model('ScoreSchema', scoreSchema)