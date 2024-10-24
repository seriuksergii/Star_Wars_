import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { getHeroes } from '../../servises/api';
import { HeroItem } from '../HeroItem/HeroItem';
import { Loader } from '../Loader/Loader';
import { FlowGraph } from '../FlowGraph/FlowGraph';
import Modal from 'react-modal';
import './HeroList.scss';

interface Hero {
  name: string;
  url: string;
  homeworld: string; // Додано поле homeworld
}

export const HeroList: React.FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  // Додано стан для модального вікна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

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

  // Функція для відкриття модального вікна
  const openModal = (hero: Hero) => {
    setSelectedHero(hero);
    setIsModalOpen(true);
  };

  // Функція для закриття модального вікна
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHero(null);
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
                      onClick={() => openModal(hero)}
                    />
                  </li>
                );
              })}
            </ul>
          )}

          {selectedHero && (
            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              contentLabel="Hero Details"
              ariaHideApp={false} // Встановіть true для кращої доступності
            >
              <h2>{selectedHero.name}</h2>
              <FlowGraph
                heroName={selectedHero.name}
                homeworld={selectedHero.homeworld}
              />
              <button onClick={closeModal}>Close</button>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};
