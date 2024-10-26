import ReactPaginate from 'react-paginate';
import './Pagination.scss';

export const Pagination = ({
  pageCount,
  handlePageClick,
}: {
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
}) => (
  <ReactPaginate
    previousLabel={'<'}
    nextLabel={'>'}
    breakLabel={'...'}
    pageCount={pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={handlePageClick}
    containerClassName={'pagination'}
    activeClassName={'active'}
  />
);
