
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from '../reducer/DataReducer'

const DataContext = createContext();
const API = "https://api.spacexdata.com/v3/capsules";

const initialState = {
  isLoading: false,
  products: [],
  singleProduct: {},
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    console.log("Url ",url)
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <DataContext.Provider value={{ ...state}}>
      {children}
    </DataContext.Provider>
  );
};

// custom hooks
const useDataContext = () => {
  return useContext(DataContext);
};

export { DataProvider, DataContext, useDataContext };
