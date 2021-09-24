const scoreSchema = require ('../acounts')
const express = require ('express')

const router = express.Router()
router.get('/account', async (req,res)=>{
    const rs =await scoreSchema.find()
    return res.send(rs)
})

router.post('/account', async (req,res)=>{
    const rs =await scoreSchema.create(req.body)
    return res.send(rs)
})

module.exports = router