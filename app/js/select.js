document.addEventListener("DOMContentLoaded", () => {
  class Select {
    constructor(selector, options) {

      this.$el = document.querySelector(selector)
      this.options = options

      this.#setup()
    }

    #setup() {
      this.clickHandler = this.clickHandler.bind(this)
      this.$el.addEventListener('click', this.clickHandler) 
      this.$arrow = this.$el.querySelector('[data-type="arrow"]')
      this.$value = this.$el.querySelector('[data-type="value"]')
    }

    clickHandler(event) { 
      const {type} = event.target.dataset;

      if (type === 'input') {
        this.toggle()
      } else if (type === 'item') {
        this.select(event)
      } else if (type === 'backdrop') {
        this.close()
      }
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
  }

  document.querySelectorAll('.select').forEach(el => {
      new Select('#' + el.id);
  })
});