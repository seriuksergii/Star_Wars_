import React, { useEffect, useState } from 'react';
import { getHeroes } from '../../servises/api'; // Убедитесь, что путь к вашему API корректный
import { HeroItem } from '../HeroItem/HeroItem'; // Импортируйте ваш компонент HeroImage
import { Loader } from '../Loader/Loader'; // Импортируйте ваш компонент Loader

interface Hero {
  name: string;
  id: number;
}

export const HeroList: React.FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Состояние для страницы

  // Функция для загрузки героев
  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, [page]); // Зависимость от страницы

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-list">
          <h1 className="hero-logo">
            <img src="/logo.png" alt="Logo" />
          </h1>
          {loading ? (
            <Loader /> // Показать лоадер, если идет загрузка
          ) : (
            <>
              {heroes.length > 0 ? (
                <ul className="hero-list-container">
                  {heroes.map((hero: Hero) => (
                    <li className="hero-item" key={hero.id}>
                      <HeroItem
                        src={`https://starwars-visualguide.com/assets/img/characters/${hero.id}.jpg`}
                        alt={hero.name}
                        className="hero-image"
                        name={hero.name}
                      />
                      <p className="hero-name">{hero.name}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-heroes-message">Heroes Not Found</p>
              )}
              <button onClick={() => setPage(page + 1)}>Load More</button> {/* Кнопка для загрузки следующей страницы */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
