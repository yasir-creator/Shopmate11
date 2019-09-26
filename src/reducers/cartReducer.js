import { CART_ITEMS } from "../actions/type";

const initialState = {
  cartitems: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CART_ITEMS:
      return {
        ...state,
        // cartitems: action.payload,
        // caritems: action.payload
        // cartitems: cartitems.push(payload)
        // cartitems: state.cartitems.push(action.payload)
        cartitems: action.payload
      };
    default:
      return state;
  }
}
