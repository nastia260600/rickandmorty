import ReactPaginate from 'react-paginate';
import './pagination.scss'

const Pagination = ({ setPageNumber, pageNumber, info }) => {

   return (
      <ReactPaginate
         className='pagination'
         forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
         previousLabel="Prev"
         nextLabel="Next"
         nextClassName="nextBtn"
         previousClassName="prevBtn"
         pageClassName="pagination__item"
         pageLinkClassName="pagination__link"
         breakLinkClassName="break__link"
         activeClassName="activePage"
         activeLinkClassName="activeLink"
         onPageChange={(data) => {
            setPageNumber(data.selected + 1);
         }}
         pageCount={info?.pages} /> //if info exists then add .pages
   )
}

export default Pagination