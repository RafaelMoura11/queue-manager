const app = require('./app');
require('dotenv').config()

const port = 3307 //aqui virá como process.env.PORT

app.listen(port,() =>{
    console.log(`Server is running in http://localhost:${port}`)
})