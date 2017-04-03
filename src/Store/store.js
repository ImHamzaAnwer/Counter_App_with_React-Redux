import {combineReducers,createStore} from "redux";
// import { applyMiddleware } from "redux";
import { counterReducer } from "./reducers/reducer.js";
// import thunk from "redux-thunk";
// import logger from "redux-logger";


    var reducer = combineReducers({
        counterReducer

    });

    // const middleWare = applyMiddleware(thunk, logger())
    var store = createStore(reducer);

   export default store;