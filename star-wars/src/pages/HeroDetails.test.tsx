import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroDetails } from './HeroDetails';

describe('HeroDetails component', () => {
  it('HeroDetails renders', () => {
    render(<HeroDetails />);
  });
});
