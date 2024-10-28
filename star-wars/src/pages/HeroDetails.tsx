// src/pages/HeroDetail.tsx
import React, { useEffect, useState } from 'react';
import { Hero } from '../types/types';
import { useParams } from 'react-router-dom';
import { HeroModal } from '../components/HeroModal/HeroModal'; // Якщо ви використовуєте модальне вікно

export const HeroDetails: React.FC = () => {
  const { heroId } = useParams<{ heroId: string }>();
  const [hero, setHero] = useState<Hero | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchHeroDetails = async () => {
      try {
        const response = await fetch(
          `https://sw-api.starnavi.io/people/${heroId}`
        );
        const data = await response.json();
        setHero(data);
      } catch (error) {
        console.error('Error fetching hero details:', error);
      }
    };

    if (heroId) {
      fetchHeroDetails();
    }
  }, [heroId]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!hero) return <div>Loading...</div>;

  return (
    <div>
      <h2>Hero Details for {hero.name}</h2>
      <p>Birth Year: {hero.birth_year}</p>
      <p>Eye Color: {hero.eye_color}</p>
      <p>Gender: {hero.gender}</p>
      <p>Hair Color: {hero.hair_color}</p>
      <p>Height: {hero.height}</p>
      <p>Mass: {hero.mass}</p>
      <p>Skin Color: {hero.skin_color}</p>
      <p>Homeworld: {hero.homeworld}</p>
      <p>Films: {hero.films.join(', ')}</p>
      <p>Starships: {hero.starships.join(', ')}</p>

      <HeroModal
        isOpen={isModalOpen}
        selectedHero={hero}
        filmTitles={hero.films}
        starshipNames={hero.starships}
        close={closeModal}
      />
    </div>
  );
};
