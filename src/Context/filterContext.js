import { createContext, useContext, useReducer } from "react";
import filterReducer, { initialFilterState } from "./filterReducer";

export const filterContext = createContext(null);

export default function FilterContextProvider({ children }) {
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );

  const value = { filterState, filterDispatch };
  return (
    <filterContext.Provider value={value}>{children}</filterContext.Provider>
  );
}
export function useFilterContext() {
  return useContext(filterContext);
}
