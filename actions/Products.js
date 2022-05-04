import {GET_PRODUCTS_REQUEST, GET_PRODUCTS_DATA_SUCCESS, GET_PRODUCTS_DATA_FAIL} from '../contans/contans'
export const getProducts = () => {
    return (dispatch) => {
        dispatch({
            type:  GET_PRODUCTS_REQUEST 
        })
    axios.get('').then(resp => {
        const data = resp.data;
        dispatch({
            type:  GET_PRODUCTS_DATA_SUCCESS ,
            payload: data
        })
    }).catch((err) => {
        dispatch({
            type: GET_PRODUCTS_DATA_FAIL ,
            payload: err
        })
    })
    }
}