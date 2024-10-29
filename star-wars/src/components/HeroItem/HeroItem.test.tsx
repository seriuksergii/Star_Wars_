import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroItem } from './HeroItem';

// Create the test group for the HeroItem component
describe('HeroItem component', () => {
  it('HeroItem renders', () => {
    render(
      <HeroItem
        src={''}
        alt={''}
        name={''}
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    // Get an element with the 'hero-item' test attribute
    const heroItem = screen.getByTestId('hero-item');
    // Check that the heroItem element is present in the document
    expect(heroItem).toBeInTheDocument();
    // Get an element with the 'hero-name' test attribute
    const heroName = screen.getByTestId('hero-name');
    // Check that the heroName element is present in the document
    expect(heroName).toBeInTheDocument();
  });
});
