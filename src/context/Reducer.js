import toast from 'react-hot-toast';

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      toast.success(`Added ${action.payload.name} to the cart!`, { id: action.payload.id });
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    }
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sortOrder: action.payload };
    case "FILTER_BY_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
};