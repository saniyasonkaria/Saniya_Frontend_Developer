import React from "react";
import Input from "../helpers/Input";
import { useFilterContext } from "../context/FilterContext";

const SearchForm = () => {
 const {
    filters: { type, status, capsule_serial },
    updateFilterValue,
    clearFilters,
    filter_products
  } = useFilterContext();
  return (
    <div className="p-4  bg-gray-800">
      <label className="m-1 p-1 block text-3xl font-medium text-white">
        CapsulesX Data
      </label>
      <label className="block text-md font-medium text-white pb-1 m-1 p-2">
  Total Match : {filter_products.length}
</label>
      <div className="grid grid-cols-1 md:grid-cols-3 m-1 p-1">
        <Input label="Type" value={type} name="type"  onChange={updateFilterValue}></Input>
        <Input label="Status" value={status} name="status"  onChange={updateFilterValue}></Input>
        <Input
          label="Serial"
          value={capsule_serial}
          name="capsule_serial"
          onChange={updateFilterValue}
        ></Input>
      </div>
      <div className="flex justify-center py-2">
        <button
          className="bg-red-500 hover:bg-red-600 p-2 text-white text-sm mx-auto text-center rounded-sm"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
      
    </div>
  );
};

export default SearchForm;
