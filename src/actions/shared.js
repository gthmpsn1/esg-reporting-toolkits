import { getInitialData } from "../utils/api";
import { receiveProducts } from "./products";
import { receiveMerchants } from "./merchants";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData () {

    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({merchants, products}) => {
                dispatch(receiveMerchants(merchants));
                dispatch(receiveProducts(products));
                dispatch(hideLoading());
            })
    }
}