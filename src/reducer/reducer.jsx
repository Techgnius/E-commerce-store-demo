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
        cartState: [...state.cartState, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartState: [
          ...state.cartState.filter((cart) => cart.id !== action.payload.id),
        ],
      };
    // case "UPDATE_ITEM_QUANTITY":
    //   return {
    //     ...state,
    //     cartState: [
    //       ...state.cartState.filter((cart) =>
    //         cart.id === action.payload.id
    //           ? (cart.quantity = action.payload.quantity + 1)
    //           : cart.quantity
    //       ),
    //     ],
    //   };
    default:
      return state;
  }
};
