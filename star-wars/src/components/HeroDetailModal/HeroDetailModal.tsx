import React from 'react';
import './HeroDetailModal.scss';

interface Hero {
  name: string;
  url: string;
  birth_year: string;
  eye_color: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: [];
  species: [];
  starships: [];
  vehicles: [];
}

interface HeroDetailModalProps {
  hero: Hero;
  closeModal: () => void;
}

export const HeroDetailModal: React.FC<HeroDetailModalProps> = ({
  hero,
  closeModal,
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{hero.name}</h2>
        <p>Birth Year: {hero.birth_year}</p>
        <p>Eye Color: {hero.eye_color}</p>
        <p>Gender: {hero.birth_year}</p>
        <p>Hair Color: {hero.hair_color}</p>
        <p>Height: {hero.height}</p>
        <p>Mass: {hero.mass}</p>
        <p>Skin Color: {hero.skin_color}</p>
        <p>Homeworld: {hero.homeworld}</p>
        <p>Films: {hero.films}</p>
        <p>Species: {hero.species}</p>
        <p>Starships: {hero.starships}</p>
        <p>Vehicles: {hero.vehicles}</p>
        <p>Url: {hero.url}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};
