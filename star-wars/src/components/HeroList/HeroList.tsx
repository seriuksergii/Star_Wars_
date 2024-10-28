import React, { useEffect, useState } from 'react';
import { Pagination } from '../Pagination';
import {
  getHeroes,
  fetchFilmTitles,
  fetchSpeciesNames,
  fetchStarshipNames,
  fetchVehicleNames,
} from '../../api/StarWarsAPI';
import { extractIdFromUrl } from '../../utils/utils';
import { HeroItem } from '../HeroItem';
import { Loader } from '../Loader';
import { HeroModal } from '../HeroModal';
import { Hero } from '../../types/types';

import './HeroList.scss';

export const HeroList: React.FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [filmTitles, setFilmTitles] = useState<string[]>([]);
  const [, setSpeciesNames] = useState<string[]>([]);
  const [starshipNames, setStarshipNames] = useState<string[]>([]);
  const [, setVehicleNames] = useState<string[]>([]);

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

  const openModal = async (hero: Hero) => {
    setSelectedHero(hero);

    const titles = await fetchFilmTitles(hero.films);
    setFilmTitles(titles);

    const speciesNames = await fetchSpeciesNames(hero.species);
    setSpeciesNames(speciesNames);

    const starshipNames = await fetchStarshipNames(hero.starships);
    setStarshipNames(starshipNames);

    const vehicleNames = await fetchVehicleNames(hero.vehicles);
    setVehicleNames(vehicleNames);

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHero(null);
    setFilmTitles([]);
    setSpeciesNames([]);
    setStarshipNames([]);
    setVehicleNames([]);
  };

  return (
    <div className="hero" data-testid="hero">
      <div className="hero-container">
        <div className="hero-list">
          <h1 className="hero-logo">
            <img src="/logo.png" alt="Logo" />
          </h1>

          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />

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

          <HeroModal
            isOpen={isModalOpen}
            selectedHero={selectedHero}
            filmTitles={filmTitles}
            starshipNames={starshipNames}
            close={closeModal}
          />
        </div>
      </div>
    </div>
  );
};
