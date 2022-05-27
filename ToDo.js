class ToDo {
  constructor(arr) {
    this.arr = arr;
    
  }
  
  render(arr){
     const text=document.querySelector('.text')
        text.innerHTML=''
        const ol=document.createElement('ol')
   arr.forEach((element,index) => {     
       const li = document.createElement('li');
       const p = document.createElement('p');
       p.classList.add('p')
       p.innerText=element
       p.addEventListener('click',()=>{
           p.classList.toggle('through')
         })
         const button=new Button('Delete',this.onClick=()=>{
                arr.splice(index,1)
                this.render(arr)
            })
         li.append(p, button.render(li,this.onClick))
         ol.appendChild(li)
      text.appendChild(ol)
  })
}
}

newTodo = new ToDo(this.arr);


let toDos = [];
form = new Form("todo",onSubmit = (task) => {
toDos=toDos.concat(task)
document.querySelector('input').value=''
newTodo.render(toDos)
  }
)

document.querySelector(".todo").appendChild(form.render());

