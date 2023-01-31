import { createContext, useContext, useReducer, useEffect } from "react";
import { useDataContext } from "./DataContext";
import reducer from "../reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  filters: {
    type: "",
    status: "",
    capsule_serial: "",
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useDataContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({
      type: "UPDATE_FILTER_PRODUCT",
      payload: { name, value },
    });
  };
  // to clear the filter
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.filters]);
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{ ...state, updateFilterValue, clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
