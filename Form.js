class Form   {
    constructor(initialValue, onSubmit) {
        this.initialValue = initialValue
    this.onSubmit = onSubmit
}
    render() {
    const form = document.createElement("form");
    form.classList.add("form");
    const input = new Input(
        this.initialValue,
        (value) => this.value = value
    )
  
    const button = new Button("Add");
      form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.onSubmit(this.value);
            
      });
    form.appendChild(input.render());
    form.appendChild(button.render());
    return form;
  };
};
