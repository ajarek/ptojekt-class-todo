class MyTodo{
constructor(arr){
    this.arr=this.getTasks()||[]
    this.loadTasks()
}

setTasks(newTasks) {
    this.tasks = newTasks
    localStorage.setItem('task', JSON.stringify(this.arr))
    this.render()
}

getTasks(){
    return JSON.parse(localStorage.getItem('task'))
}

loadTasks(){
    const todosList=document.querySelector('.todos-list')
    todosList.innerHTML=''
    const ol=document.createElement('ol')
    ol.classList.add('ol')
this.arr.forEach((element,index) => {     
   const li = document.createElement('li');
   li.classList.add('li')
   const p = document.createElement('p');
   p.classList.add('p')
   p.innerText=element
   p.addEventListener('click',()=>{
       p.classList.toggle('through')
     })
     const button=new Button('Delete',this.onClick=()=>{
            this.arr.splice(index,1)
            this.setTasks(this.arr)
            this.loadTasks()
        })
     li.append(p, button.render(li,this.onClick))
     ol.appendChild(li)
  todosList.appendChild(ol)
})
}

addTasks(task){
    if(task){       
    this.arr=this.arr.concat(task)
    this.setTasks(this.arr)
    this.loadTasks()
    this.render()
    }
}


render(){
const container=document.querySelector('.todo-input')
container.innerHTML=''
const form = new Form("", (task) => {this.addTasks(task)})
container.appendChild(form.render());
this.loadTasks()

}

}





