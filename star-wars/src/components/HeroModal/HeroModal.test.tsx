import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroModal } from './HeroModal';

// Test that checks whether the HeroModal component is rendered
describe('HeroModal component', () => {
  it('HeroModal renders', () => {
    render(
      <HeroModal
        isOpen={false}
        selectedHero={null}
        filmTitles={[]}
        starshipNames={[]}
        close={() => {}}
      />
    );
  });
});
