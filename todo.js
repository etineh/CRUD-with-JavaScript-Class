let arr = []
let check = 0
let postID

class Todo{
    constructor(){
        this.value = document.getElementById("item").value
    }
    createTodo() {
        if(check){
            this.value.length !== 0 ? arr[postID] =  this.value : alert("Task can't be empty, try again.");
            check = this.value.length !== 0 ? 0 : 1
        } else {
            this.value.length !== 0 ? arr.push(this.value) : alert("You can't submit empty task")
        }
        let post = ''
        arr.forEach((el, i)=>{
            post += `<div style="margin-bottom:20px">${el}
            <span onClick=edit(${i}) style="background:purple; color:white;">edit</span> 
            <span onClick=del(${i}) style="background:purple; color:white;">del</span> </div>`
        })
        document.getElementById("items").innerHTML = post
    }
   
    edit(id){
        document.getElementById("item").value = arr[id]
        postID = id
        check = 1
    }
    
    delete(id){
        arr.splice(id, 1)
        let post = ""
        arr.forEach((el, i)=>{
            post += `<div style="margin-bottom:20px">${el}
            <span onClick=edit(${i}) style="background:purple; color:white;">edit</span> 
            <span onClick=del(${i}) style="background:purple; color:white;">del</span> </div>`
        })
        document.getElementById("items").innerHTML = post
    }
}

const edit =(id)=>{
    let great = new Todo()
    return great.edit(id) 
}

const del =(id)=>{
    let great = new Todo()
    return great.delete(id) 
}

const delAll = ()=>{
    arr = []
    document.getElementById("items").innerHTML = ""
}

const createTodo = ()=> {
    let great = new Todo()
    document.getElementById("item").value = ''
    return great.createTodo()
}
