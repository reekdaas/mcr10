export const initialFilterState = {
  category: "All Categories",
  lowStockItem: false,
  sort: "",
};

export default function filterReducer(state, { type, payload }) {
  switch (type) {
    case "FILTER_BY_CATEGORY": {
      return { ...state, category: payload };
    }
    case "FILTER_BY_LOWSTOCK": {
      return { ...state, lowStockItem: !state.lowStockItem };
    }

    case "FILTER_BY_SORT": {
      return { ...state, sort: payload };
    }
    case "CLEAR_FILTERS": {
      return initialFilterState;
    }
    default:
      return state;
  }
}
