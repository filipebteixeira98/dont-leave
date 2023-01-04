export default class DontLeave {
  constructor(callback) {
    this.callback = callback

    this.handleMouseOut()
  }

  handleMouseOut() {
    document.addEventListener('mouseout', event => {
      if (event.relatedTarget === null) {
        this.callback()
      }
    })
  }
}
