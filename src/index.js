export default class DontLeave {
  constructor(callback, delay) {
    this.callback = callback

    this.delay = delay

    this.init()
  }

  init = () => {
    this.timer = window.setTimeout(this.handleMouseOut, this.delay)
  }

  destroy = () => {
    clearTimeout(this.timer)

    document.removeEventListener('mouseout', this.checkOutOfBounds)
  }

  checkOutOfBounds = event => {
    if (event.relatedTarget === null) {
      this.callback()

      this.destroy()
    }
  }

  handleMouseOut = () => {
    document.addEventListener('mouseout', this.checkOutOfBounds)
  }
}
