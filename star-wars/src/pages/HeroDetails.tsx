import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Hero } from '../types/types';
import { HeroModal } from '../components/HeroModal';
import { Loader } from '../components/Loader';

// I declare the functional component HeroDetails with typing TypeScript (React.FC).
export const HeroDetails: React.FC = () => {
  const { heroId } = useParams<{ heroId: string }>(); //Getting heroId parameter from URL
  const [hero, setHero] = useState<Hero | null>(null); //Determining the status of hero
  const [isModalOpen, setIsModalOpen] = useState(false); //Determining the status of isModalOpen

  /* useEffect is called every time the heroId changes, which allows data
  to be loaded when the URL changes */
  useEffect(() => {
    /*  fetchHeroDetails is an asynchronous function that retrieves hero data
    from the heroId-based API and stores it in the hero state. */
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

  // This function sets isModalOpen to false, which closes the modal window.
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // If the data is not already loaded (hero = = = null), the < Loading/> component is rendered.
  if (!hero) return <Loader />;

  // Displays details about the hero using the properties of the hero object.
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
