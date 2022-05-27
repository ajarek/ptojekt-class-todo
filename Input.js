class Input{
    constructor(text, onChange) {
        this.text = text
        this.onChange = onChange
    }
        
    render(){
        const Input = document.createElement('input')
        Input.classList.add('input')
        Input.addEventListener('input', (e) =>
         this.onChange(e.target.value)
        )
        return Input
    }
    
}