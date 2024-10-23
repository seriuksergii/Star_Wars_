import './HeroList.scss';
import { useEffect, useState } from 'react';
import { getHeroes } from '../../servises/api';
import { HeroImage } from '../HeroImage/HeroImage';

export const HeroList = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [page, setPage] = useState(1);

  interface Hero {
    name: string;
    id: number;
  }

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await getHeroes(page);
        setHeroes((prevHeroes) => {
          const newHeroes = response.results;
          const existingHeroes = new Set(prevHeroes.map((hero) => hero.id));
          return [
            ...prevHeroes,
            ...newHeroes.filter((hero: Hero) => !existingHeroes.has(hero.id)),
          ];
        });
      } catch (error) {
        console.error('Error fetching heroes:', error);
      }
    };

    fetchHeroes();
  }, [page]);

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-list">
          <h1 className="hero-logo">
            <img src="/logo.png" alt="Logo" />
          </h1>
          {heroes.length > 0 ? (
            <ul className="hero-list-container">
              {heroes.map((hero: Hero, index) => (
                <li className="hero-item" key={index}>
                  <HeroImage
                    src={`https://starwars-visualguide.com/assets/img/characters/${hero.id}.jpg`}
                    alt={hero.name}
                    className="hero-image"
                  />
                  <p className="hero-name">{hero.name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-heroes-message">Heroes Not Found</p>
          )}
          <button onClick={() => setPage(page + 1)}>Load More</button>
        </div>
      </div>
    </div>
  );
};
