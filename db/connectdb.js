const mongoose  =require('mongoose')
// const url = "mongodb://127.0.0.1:27017/Api"
const live_Url = "mongodb+srv://ritikraghuwanshi728:ritikraghuwanshi@cluster0.oy5gife.mongodb.net/blogapi"


const connectdb =()=>{
    return mongoose.connect(live_Url)

    .then(()=>{
        console.log('Database connected..')
    })
    .catch((error)=>{
        console.log(error)
    })
}

module.exports =connectdb