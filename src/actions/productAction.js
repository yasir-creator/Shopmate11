import axios from "axios";
// import setToken from "../utiltities/setToken";
// import jwt_decode from "jwt-decode";

import { GET_ERRORS, GET_PRODUCTS, PRODUCTS_LOADING } from "./type";

export const getProducts = () => dispatch => {
  dispatch(setProductLoading());
  axios
    .get("/products")
    .then(res => {
      console.log("jkfhklsdjfaklf", res);
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    })
    .catch(e => {
      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
    });
};

// Set loading state
export const setProductLoading = () => {
  return {
    type: PRODUCTS_LOADING
  };
};
