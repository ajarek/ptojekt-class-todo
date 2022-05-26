class Input{
    constructor(text, onChange) {
        this.text = text
        this.onChange = onChange
    }
       
    
    
    render(){
        const input = document.createElement('input');
        input.addEventListener(
            'input',
            (e) => this.onChange(e.target.value)
        )

        return input;
    }
    
}