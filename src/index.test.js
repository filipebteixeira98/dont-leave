import DontLeave from './index'

describe('DontLeave', () => {
  it('should run the callback function if the user goes out of the screen', () => {
    const callback = jest.fn()
    const onLeaveIntent = new DontLeave(callback)

    // simulate the user leaving the page
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))

    expect(callback).toHaveBeenCalled()
  })

  it('should not run the callback function if the user stills on the screen', () => {
    const callback = jest.fn()
    const onLeaveIntent = new DontLeave(callback)

    // simulate the user standing on the screen
    document.dispatchEvent(
      new MouseEvent('mouseout', { relatedTarget: new EventTarget() })
    )

    expect(callback).not.toHaveBeenCalled()
  })
})
