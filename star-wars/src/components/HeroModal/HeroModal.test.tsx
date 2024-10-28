import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroModal } from './HeroModal';

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

    expect(screen.queryByText('name')).not.toBeInTheDocument();
    expect(screen.queryByText('birth_year')).not.toBeInTheDocument();
    expect(screen.queryByText('eye_color')).not.toBeInTheDocument();
    expect(screen.queryByText('gender')).not.toBeInTheDocument();
    expect(screen.queryByText('hair_color')).not.toBeInTheDocument();
    expect(screen.queryByText('height')).not.toBeInTheDocument();
    expect(screen.queryByText('mass')).not.toBeInTheDocument();
    expect(screen.queryByText('skin_color')).not.toBeInTheDocument();
    expect(screen.queryByText('homeworld')).not.toBeInTheDocument();
    expect(screen.queryByText('filmTitles')).not.toBeInTheDocument();
    expect(screen.queryByText('starshipNames')).not.toBeInTheDocument();
    expect(screen.queryByText('url')).not.toBeInTheDocument();
  });
});
