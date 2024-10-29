import ReactPaginate from 'react-paginate';
import { PaginationProps } from '../../types/types';

import './Pagination.scss';

// I declare the functional component Pagination with props and with typing TypeScript
export const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  handlePageClick,
}) => (
  // Add ReactPaginate
  <ReactPaginate
    previousLabel={'<'}
    nextLabel={'>'}
    breakLabel={'...'}
    pageCount={pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={4}
    onPageChange={handlePageClick}
    containerClassName={'pagination'}
    activeClassName={'active'}
  />
);
