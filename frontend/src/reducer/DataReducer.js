const ProductReducer = (state, action) => {
    switch (action.type) {
     case "SET_LOADING":
       return {
         ...state,
         isLoading: true,
       };
 
     case "SET_API_DATA":
      console.log("hi from set api data")
       return {
         ...state,
         isLoading: false,
         products: action.payload,
       };
 
     case "API_ERROR":
      console.log("API_ERROR")
       return {
         ...state,
         isLoading: false,
         isError: true,
       };
 
     default:
       return state;
   }
 };
 
 export default ProductReducer;