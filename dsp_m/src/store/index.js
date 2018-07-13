import { createStore,applyMiddleware } from 'redux'

// import thunkMiddleware from 'redux-thunk'
import logger from "redux-logger"
import reducer from './reducer.jsx'
export * from './actions_type.jsx'
export * from './actions.jsx'

export default new createStore(reducer, applyMiddleware(logger))
