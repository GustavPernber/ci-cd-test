const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const cors=require('cors')


app.use(express.json())
app.use(cors())


app.get('/', (req, res)=>{
    res.send('hello server')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})