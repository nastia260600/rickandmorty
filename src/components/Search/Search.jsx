import './search.scss'

const Search = ({ setSearch, setPageNumber }) => {
   return (
      <div className='search'>
         <form className='search__form'>
            <div className="icon"></div>
            <input type="text" placeholder='Filter by name...' className='search__input' onChange={el => {
               setPageNumber(1)
               setSearch(el.target.value)
            }} />
         </form>
      </div>
   )
}

export default Search