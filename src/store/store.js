import { createStore } from "redux"
import cartReducer from "../reducer/reducer"

const store = createStore(cartReducer);

export default store;