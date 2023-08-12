import { createContext, useContext, useReducer } from "react";
import { initialProductState, productReducer } from "./reducer";

export const ProductContext = createContext(null);

export default function ProductContextProvider({ children }) {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );

  const value = { productState, productDispatch };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductContext);
}
