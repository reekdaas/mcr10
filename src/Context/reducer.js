import { inventoryData } from "../data";

export const initialProductState = {
  productItems: JSON.parse(localStorage.getItem("data")) || inventoryData,
};

export function productReducer(state, { type, payload }) {
  switch (type) {
    case "ADD_ITEMS": {
      const newProductArray = [...state.productItems, payload];
      localStorage.setItem("data", JSON.stringify(newProductArray));
      return { ...state, productItems: newProductArray };
    }

    default:
      return state;
  }
}
