import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Pagination } from './Pagination';

describe('Pagination component', () => {
  it('Pagination renders', () => {
    render(<Pagination pageCount={0} handlePageClick={function (): void {
      throw new Error('Function not implemented.');
    } } />);

    expect(
      screen.getByRole('button', { name: /previous/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
    
  });

  
});
