const express = require('express');
const app = express()
const port = 8080
const router = express.Router()

app.use('/', router)
app.listen(port,()=>{
    console.log(`Servidor aberto no link: http://localhost:${port}`)
})

module.exports = router