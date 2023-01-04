export default class DontLeave {
  constructor(callback) {
    this.callback = callback

    this.init()
  }

  init = () => {
    this.handleMouseOut()
  }

  checkOutOfBounds = event => {
    if (event.relatedTarget === null) {
      this.callback()
    }
  }

  handleMouseOut() {
    document.addEventListener('mouseout', this.checkOutOfBounds)
  }
}
