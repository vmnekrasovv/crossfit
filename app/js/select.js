document.addEventListener("DOMContentLoaded", () => {

  class Select {

    static instances = []

    constructor(selector, options) {

      this.$el = selector
      this.options = options

      this.#setup()

      Select.instances.push(this)
    }

    #setup() {
      this.clickHandler = this.clickHandler.bind(this)
      this.$el.addEventListener('click', this.clickHandler) 
      this.$arrow = this.$el.querySelector('[data-type="arrow"]')
      this.$value = this.$el.querySelector('[data-type="value"]')
    }

    clickHandler(event) { 

      const {type} = event.target.dataset;

      if (type === 'input' || type === 'value') this.toggle();
      else if (type === 'item') this.select(event);
      else this.toggle();

    }  

    get isOpen() {
      return this.$el.classList.contains('open') 
    }

    select() {
      
      if(!event.target.getAttribute('disabled')) {
        
        this.$el.querySelectorAll('.select__item').forEach(el => {
          el.classList.remove('selected');
          el.removeAttribute('disabled');
        });
        
        event.target.classList.add('selected');
        event.target.setAttribute('disabled','disabled');
        
        this.$value.textContent = event.target.textContent;

        this.close()
      }

    }

    toggle() {

      let selectors = document.querySelectorAll('.select');

      selectors.forEach(el => {

        if(el.id === this.$el.id) {
          this.isOpen ? this.close() : this.open()
        } else {
          el.classList.remove('open')
          el.querySelector('.select__arrow').classList.remove('arrow-up')
        }
      });    
    }

    open() {
      this.$el.classList.add('open')
      this.$arrow.classList.add('arrow-up')
    }

    close() {
      this.$el.classList.remove('open')
      this.$arrow.classList.remove('arrow-up')
    }

    static closeAll() {
      Select.instances.forEach(instance => instance.close())
    }

  }

  document.querySelectorAll('.select').forEach(el => {
      new Select(document.querySelector('#' + el.id))
  })

  document.addEventListener('click', (event) => {
    
    const clickedInsideSelect = Select.instances.some(
      select => select.$el.contains(event.target)
    );

    if(!clickedInsideSelect) Select.closeAll();

  }) // click event

});