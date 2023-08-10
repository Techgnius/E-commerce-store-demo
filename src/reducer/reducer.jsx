export const initial_state = {
  products: [],
  cartState: [],
  productDetails: [],
  isLoading: false,
  error: false,
};

export const initial_filterstate = {
  searchQuery: "",
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
        productDetails: [],
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
    case "CHANGE_ITEM_QUANTITY":
      return {
        ...state,
        cartState: state.cartState.filter((cart) =>
          cart.id === action.payload.id
            ? (cart.quantity = action.payload.quantity)
            : cart.quantity
        ),
      };
    case "OPEN_PRODUCT_DETAILS":
      return {
        ...state,
        productDetails: [
          ...state.productDetails.filter(
            (prod) => prod.id === action.payload.id
          ),
        ],
      };

    default:
      return state;
  }
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTER":
      return {
        searchQuery: "",
      };

    default:
      return state;
  }
};
