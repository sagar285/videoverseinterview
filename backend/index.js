const express =require("express")
const app=express();
const port =4000;
const route = require("./route/route")
require("./config/db")
const cors =require("cors");

app.use(cors())
app.use(express.json())
app.use(route)




app.listen(port,()=>{
    console.log(`server listening on port no ${port}`)
})