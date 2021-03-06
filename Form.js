class Form   {
    constructor(value, onSubmit) {
    this.value = value
    this.onSubmit = onSubmit
}

    render() {
    const Form = document.createElement("form")
    Form.classList.add("form")

    const input = new Input(this.value,(value) => this.value = value, "🖊️")
  
    const button = new Button("Add")

      Form.addEventListener("submit", (e) => {
            e.preventDefault()
            this.onSubmit(this.value)
      })
    Form.appendChild(input.render())
    Form.appendChild(button.render())
    return Form
  };
};
