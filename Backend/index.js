const express = require('express')
const { config } = require('./src/config/server.config'); 
const mongoose = require('mongoose');
const { router : todoRoutes} = require('./routes/todo.routes')
const { router : userRoutes} = require('./routes/user.routes')
// const { router : todoItemsRoutes} = require('./routes/todoItems.routes')
const cors = require('cors')

const app = express()
const PORT = config.PORT

app.use(express.json());
app.use(cors())

async function ConnectDB(){
    try{
        console.log("Establishing Connection to DB....");
        await mongoose.connect(config.DB_URI)
        console.log("DB Connected");
    }
    catch(error){
        console.log("Something Wrong with DB ", error);
    }
}

ConnectDB()
.then(()=> console.log("DB Connected"))
.catch((err)=> console.log("Someting Wrong: " + err))

app.use('/todo', todoRoutes)
// app.use('/todo', todoItemsRoutes)
app.use('/user', userRoutes)
app.listen(PORT, ()=>{
    console.log(`Server is up on running PORT ${PORT}`);
})

module.exports = app;