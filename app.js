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
function deleteitem(id){
    delete todos[id-1]
}
app.get('/todos',(req,res)=>{
    res.send(todos)
})
app.get('/todos/:id',(req,res)=> {
        let id = req.params.id
        let result = todos.filter(todo => todo.id.toString() === id )
        let todo = result[0]
        res.send(todo)

})
app.post('/todos/:id',(req,res) =>{
        let id = req.params.id
        let result = todos.filter(todo =>todo.id.toString() === id)
        let todo =result[0]
        if (todo.completed === false){
            
        }

})
app.post('/todos',(req,res)=>{
        let todo = createtodos(req.body.title)   
        res.send(todo).sendStatus(201)  
})
app.delete('/todos/:id',(req,res)=>{
        let id = req.params.id 
        // delete todos [id-1]   //ลบแบบปกติแต่จะมีช่องว่าง
        let result = todos.filter(todo =>todo.id.toString() !== id)
        todos = result
        // console.log(todos)  // ตรวจสอบว่าคำตอบตรงไหม
        res.sendStatus(204)
})
app.put('/todos/:id', (req,res) => {
    let id = req.params.id
    let todo = todos.find(t=>t.id.toString() === id)
    console.log('todo '+todo.id)
    res.send(todo)
})
app.listen(port,()=>{
    console.log("Todo API Server stared at "+port)
})