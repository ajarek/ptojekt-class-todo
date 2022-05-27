class Button{
    constructor( text, onClick ) {
        this.text = text
        this.onClick = onClick
    }
    
    render(){
        const Button = document.createElement('button')
        Button.classList.add('button')
        Button.innerText = this.text
        Button.setAttribute('type','submit')
        Button.addEventListener('click',this.onClick)
        
        return Button
    }
   
}
