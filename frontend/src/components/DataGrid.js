import React from 'react';
import Card from '../helpers/Card' ;

const DataGrid = () => {
  return (
    <div className="p-4 bg-gray-800">
     <div className="grid grid-cols-1 md:grid-cols-3">
    <Card></Card>
    <Card></Card>
    <Card></Card>
  </div>
  </div>
  )
}

export default DataGrid
