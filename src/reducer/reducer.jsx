export const initial_state = {
  products: [],
  cartState: [],
  isLoading: false,
  error: false,
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "START_FETCH":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_SUCCESSFUL":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        error: true,
        products: [],
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartState: [...state.cartState, action.payload],
      };
    default:
      return state;
  }
};
