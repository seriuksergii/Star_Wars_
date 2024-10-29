import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroDetails } from './HeroDetails';

//Test that checks whether the HeroDetails is rendered.
describe('HeroDetails component', () => {
  it('HeroDetails renders', () => {
    render(<HeroDetails />);
  });
});
