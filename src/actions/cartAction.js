import { CART_ITEMS } from "./type";

export const cartItem = prodata => dispatch => {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", prodata);
  dispatch({
    type: CART_ITEMS,
    payload: prodata
  });
};
