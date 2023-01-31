const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
        };
  
    case "UPDATE_FILTER_PRODUCT":
      const { name, value } = action.payload;
      let stringValue=value.toString();
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: stringValue,
        },
      };
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { type, status, capsule_serial}= state.filters;

      if (type) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.type.toLowerCase().includes(type);
        });
      }
      if (status) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.status.toLowerCase().includes(status);
        });
      }
      if (capsule_serial) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.capsule_serial.toLowerCase().includes(capsule_serial);
        });
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          type: "",
          status: "",
          capsule_serial: "",
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
