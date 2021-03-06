const express = require('express')
const m = require('mongoose')
const app = express()
const route = require('./hi/acountAPI')
const cors = require('cors')
const port = 500


const url = "mongodb+srv://hello:1234@cluster0.hpaam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
app.use(cors())
m.connect(url)
.then(function () {
    console.log("connected sucsesfully")
}).catch(function (error) {console.log(error)})

app.use(express.json())
app.use('/api' ,route)


app.listen(process.env.PORT || port, () => {
    console.log("server is now listening at port 500")
})
