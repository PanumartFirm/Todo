const express = require("express")
const app = express()
const port  = 3000
app.use(express.json())

let todos = [
    {id:1, title: 'Sample todo', completed: false},
    {id:2, title: 'Completed Sample todo', completed: true}
]

app.get('/',(req,res)=>{
    res.send(todos)
})



app.listen(port,()=>{
    console.log("Todo API Server stared at "+port)
})