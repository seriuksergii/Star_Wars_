import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Homepage } from './Homepage';

//Created a test group for the Homepage component.
describe('Homepage component', () => {
  //Test that checks whether the HeroList is rendered.
  it('renders HeroList', () => {
    render(<Homepage />);
    const heroList = screen.getByTestId('hero'); //I use the getByTestId method to find an element with test ID 'hero'.
    expect(heroList).toBeInTheDocument(); //Сheck if the found item really exists in the document.
  });
});
