const express =require('express')
const app =express()
const port =4000
const web =require('./routes/web')
const connectdb = require('./db/connectdb')

//database connection
connectdb()
app.use(express.json())

//router load
app.use('/Api',web)

app.use(express.json())

//server create
app.listen(port, () =>{
        console.log('server start localhost:4000')
})