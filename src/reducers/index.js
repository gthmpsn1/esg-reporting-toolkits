import { combineReducers } from "redux";
import merchants from "./merchants";
import products from "./products";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers ({
    merchants,
    products,
    loadingBar: loadingBarReducer
});