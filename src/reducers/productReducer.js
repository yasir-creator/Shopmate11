import { GET_PRODUCTS, PRODUCTS_LOADING } from "../actions/type";
// import isEmpty from "../validations/is-empty";

const initialState = {
  // isAuthenticated: false,
  userProduct: {},
  loading: false
  // cart: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PRODUCTS:
      return {
        ...state,
        // isAuthenticated: !isEmpty(action.payload),
        userProduct: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
