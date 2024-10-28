import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Homepage } from './Homepage';

describe('Homepage component', () => {
  it('renders HeroList', () => {
    render(<Homepage />);
    const heroList = screen.getByTestId('hero');
    expect(heroList).toBeInTheDocument();
  });
});
