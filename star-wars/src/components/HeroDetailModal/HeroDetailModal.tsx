// HeroDetailModal.tsx
import React from 'react';
import { FlowGraph } from '../FlowGraph/FlowGraph';

interface Hero {
  name: string;
  homeworld: string; // Додаємо homeworld до Hero
}

interface Props {
  hero: Hero;
  closeModal: () => void;
}

export const HeroDetailModal: React.FC<Props> = ({ hero, closeModal }) => {
  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <FlowGraph heroName={hero.name} homeworld={hero.homeworld} /> {/* Використовуємо FlowGraph */}
      <button
        onClick={closeModal}
        style={{ position: 'absolute', top: 10, right: 10 }}
      >
        Close
      </button>
    </div>
  );
};
