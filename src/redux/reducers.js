import { combineReducers } from 'redux'

function kylin (state = 'kylinzuo', action) {
  return state
}

const appStore = combineReducers({
  kylin
})

export default appStore
