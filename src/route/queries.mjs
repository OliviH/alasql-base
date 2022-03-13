import { Router } from "express"

const route = Router()

route.post('/get', (req,res) => {
    res.json({
        message: 'ok',
        date: new Date().toISOString()
    })
})
route.post('/upsert', (req,res) => {
    res.json({
        message: 'ok',
        date: new Date().toISOString()
    })
})
route.post('/delete', (req,res) => {
    res.json({
        message: 'ok',
        date: new Date().toISOString()
    })
})
export default route