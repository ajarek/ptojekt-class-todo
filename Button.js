class Button{
    constructor( text){
        this.text = text;
        
       
    }
    render(){
        const Button = document.createElement('button');
        Button.innerText = this.text;
        Button.setAttribute('type','submit');
        return Button;
    }
    addTask
}
