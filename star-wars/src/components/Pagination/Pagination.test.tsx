import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Pagination } from './Pagination';

////Created a test group for the Pagination component.
describe('Pagination component', () => {
  it('Pagination renders', () => {
    render(
      <Pagination
        pageCount={0}
        handlePageClick={function (): void {
          throw new Error('This function is not yet implemented.');
        }}
      />
    );

    // Сheck if there are buttons with the text "Previous" and "Next" in the DOM after rendering the component.
    expect(
      screen.getByRole('button', { name: /previous/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
  });
});
