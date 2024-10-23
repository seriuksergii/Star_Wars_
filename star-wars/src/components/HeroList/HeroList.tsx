import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { getHeroes } from '../../servises/api';
import { HeroItem } from '../HeroItem/HeroItem';
import { Loader } from '../Loader/Loader';
import './HeroList.scss';

interface Hero {
  name: string;
  url: string;
}

export const HeroList: React.FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const extractIdFromUrl = (url: string) => {
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1];
  };

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        setLoading(true);
        const response = await getHeroes(currentPage + 1);
        setHeroes(response.results);
        setPageCount(Math.ceil(response.total / itemsPerPage));
      } catch (error) {
        console.error('Error fetching heroes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, [currentPage]);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-list">
          <h1 className="hero-logo">
            <img src="/logo.png" alt="Logo" />
          </h1>

          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />

          {loading ? (
            <Loader />
          ) : (
            <ul className="hero-list-container">
              {heroes.map((hero) => {
                const heroId = extractIdFromUrl(hero.url);
                return (
                  <li key={heroId}>
                    <HeroItem
                      src={`https://starwars-visualguide.com/assets/img/characters/${heroId}.jpg`}
                      alt={hero.name}
                      className="hero-image"
                      name={hero.name}
                    />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
