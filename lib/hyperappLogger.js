const isArray = Array.isArray
const isFunction = param => typeof param === 'function'

export const logger = (bEnabled, output = console.debug) =>
  bEnabled && (dispatch => (action, props, obj) => {
    if(isFunction(action))
      output('Action', action.name, props, obj)
    else if(isArray(action)){
      // 'tuple action' logged with next dispatch iteration
      if(isArray(action[1]))
        output('Effect', action[1][0].name, action[1][1])
    } else output('State', action)
    return dispatch(action, props, obj)
  })
export default logger