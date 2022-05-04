import { combineReducers } from "redux";
import Products from '../actions/Products'
const rootReducer = combineReducers({
    products: Products
})

export default rootReducer