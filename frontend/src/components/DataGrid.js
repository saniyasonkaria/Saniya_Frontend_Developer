import React,{useState} from 'react';
import Card from '../helpers/Card' ;
import {useFilterContext} from '../context/FilterContext'
import Pagination from './Pagination';
import Modal from '../helpers/Modal';

const DataGrid = () => {
  const { filter_products} = useFilterContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleDataClick = (item) => {
    setSelectedData(item);
    console.log(item)
    setIsModalOpen(true);
  }

  const itemsPerPage = 6;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const data = filter_products.slice(startIndex, endIndex);


  return (
    <div className="p-4 bg-gray-800">
     <div className="grid grid-cols-1 md:grid-cols-3 md ">
 
      {data.map((item,index)=><Card  onClick={() => handleDataClick(item)}
       status={item.status} type={item.type} capsule_serial={item.capsule_serial} key={index}  >
       </Card>
     )}
     {isModalOpen && (<Modal selectedData={selectedData} onClose={() => setIsModalOpen(false)} />)}
  </div>
  <Pagination
        totalItems={filter_products.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
   </div>
)
}

export default DataGrid

