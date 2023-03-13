import './home.scss';
import logo from './logo.png'
import { useEffect, useState } from 'react'
import Cards from '../components/Cards/Cards'
import Pagination from '../components/Pagination/Pagination';
import Search from '../components/Search/Search';

const Home = () => {
   let [pageNumber, setPageNumber] = useState(1);
   let [fetchedData, updateFetchData] = useState([]);
   let [search, setSearch] = useState("");

   let { info, results = [] } = fetchedData

   let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

   useEffect(() => {
      (async function () {
         let data = await fetch(api).then(res => res.json())
         updateFetchData(data);
      })();
   }, [api])

   return (
      <div className="container">
         <img className='logo' src={logo} alt='' />
         <Search setSearch={setSearch} setPageNumber={setPageNumber} />
         <Cards page="/" results={results} />
         <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber} />
      </div>
   );
}

export default Home