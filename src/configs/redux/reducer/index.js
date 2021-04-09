import {combineReducers} from 'redux'
import User from './users'
const RootReducer = combineReducers({
    User : User
})
export default RootReducer