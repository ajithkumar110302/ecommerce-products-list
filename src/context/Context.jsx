import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer, productReducer } from "./Reducer";

const Cart = createContext();

const initialState = {
  products: [],
  cart: [],
  loading: true,
};

const initialProductState = {
  selectedCategory: "All",
  sortOrder: "default",
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [productState, productDispatch] = useReducer(productReducer, initialProductState);



  useEffect(() => {
    let timer;
    import("../data/products.json")
      .then((data) => {
        const parsedData = JSON.parse(JSON.stringify(data.products));
        dispatch({ type: "SET_PRODUCTS", payload: parsedData });
        timer = setTimeout(() => dispatch({ type: "SET_LOADING", payload: false }), 1500); 
      })
      .catch((error) => {
        console.error("Failed to load products:", error);
        dispatch({ type: "SET_LOADING", payload: false }); 
      });

    return () => clearTimeout(timer);
  }, []);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;