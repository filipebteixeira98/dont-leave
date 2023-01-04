import DontLeave from './index'

describe('DontLeave', () => {
  let callback, onLeaveIntent

  beforeEach(() => {
    callback = jest.fn()
    onLeaveIntent = new DontLeave(callback)
  })

  it('should run the callback function if the user goes out of the screen', () => {
    // simulate the user leaving the page
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))

    expect(callback).toHaveBeenCalled()
  })

  it('should not run the callback function if the user stills on the screen', () => {
    // simulate the user standing on the screen
    document.dispatchEvent(
      new MouseEvent('mouseout', { relatedTarget: new EventTarget() })
    )

    expect(callback).not.toHaveBeenCalled()
  })
})
