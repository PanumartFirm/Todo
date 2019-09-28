const express = require("express")
const app = express()
const port  = 3000
app.use(express.json())

let todos = [
    {id:1, title: 'Sample todo', completed: false},
    {id:2, title: 'Completed Sample todo', completed: true}
]


function createtodos (data){
        let title = data
        let todo = {title: title,completed: false, id: todos.length+1}
        todos.push(todo)
        return todo
}
app.get('/todos',(req,res)=>{
    res.send(todos)
})

app.post('/todos',(req,res)=>{
        let todo = createtodos(req.body.title)   
        res.send(todo).sendStatus(201)  
})

app.listen(port,()=>{
    console.log("Todo API Server stared at "+port)
})