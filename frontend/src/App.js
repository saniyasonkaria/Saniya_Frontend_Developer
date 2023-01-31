import './App.css';
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm';
import DataGrid from './components/DataGrid';
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Banner></Banner>
      <SearchForm></SearchForm>
      <DataGrid></DataGrid>
    </div>
  );
}

export default App;