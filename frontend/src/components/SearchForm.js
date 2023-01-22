import React from "react";
import Input from '../helpers/Input'

const SearchForm = () => {
  return (
    <div className="p-4  bg-gray-800">
      <label  className="block text-3xl font-medium text-white">
        There is some CapsulesX Data
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3">
      <Input label = 'Status'></Input>
      <Input label = 'Orignal Launch'></Input>
      <Input label = 'Type'></Input>
      </div>
      <label className="block text-md font-small pl-2 text-white pb-1">Total Match : 10 </label>
    </div>
  );
};

export default SearchForm;
