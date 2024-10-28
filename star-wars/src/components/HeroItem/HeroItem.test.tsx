import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroItem } from './HeroItem';

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
    const heroItem = screen.getByTestId('hero-item');
    expect(heroItem).toBeInTheDocument();
    const heroName = screen.getByTestId('hero-name');
    expect(heroName).toBeInTheDocument();
  });
});
