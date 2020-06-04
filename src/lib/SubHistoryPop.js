// from https://github.com/okwolf/hyperapp-fx

function makeRemoveListener(attachTo, dispatch, action, eventName) {
    var handler = dispatch.bind(null, action)
    attachTo.addEventListener(eventName, handler)
    return function() {
      attachTo.removeEventListener(eventName, handler)
    }
  }

function historyPopEffect(dispatch, props) {
return makeRemoveListener(window, dispatch, props.action, "popstate")
}

export default state => [historyPopEffect, { action: (state, event) => ({...state, ...event.state}) }]