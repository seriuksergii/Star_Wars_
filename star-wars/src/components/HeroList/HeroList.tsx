import React, { useEffect, useState } from 'react';
import { Hero } from '../../types/types';
import {
  getHeroes,
  fetchFilmTitles,
  fetchSpeciesNames,
  fetchStarshipNames,
  fetchVehicleNames,
} from '../../api/StarWarsAPI';
import { extractIdFromUrl } from '../../utils/utils';
import { Loader } from '../Loader';
import { HeroItem } from '../HeroItem';
import { HeroModal } from '../HeroModal';
import { Pagination } from '../Pagination';

import './HeroList.scss';

// Announce the HeroList functional component that renders a list of heroes
export const HeroList: React.FC = () => {
  // State to store the list of heroes
  const [heroes, setHeroes] = useState<Hero[]>([]);

  // State to track if data is loading
  const [loading, setLoading] = useState(true);

  // State to track the number of pages
  const [pageCount, setPageCount] = useState(0);

  // State for the current page number
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 10; // Number of items per page

  // State to control the modal window
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to store the selected hero details
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  // State to store the titles of the films
  const [filmTitles, setFilmTitles] = useState<string[]>([]);

  // State for species names
  const [, setSpeciesNames] = useState<string[]>([]);

  // State to store the names of the starships
  const [starshipNames, setStarshipNames] = useState<string[]>([]);

  // State for vehicle names
  const [, setVehicleNames] = useState<string[]>([]);

  // UseEffect to get heroes when changing the page
  useEffect(() => {
    //Asynchronous function to get heroes
    const fetchHeroes = async () => {
      try {
        setLoading(true);
        const response = await getHeroes(currentPage + 1); // Get heroes from the API
        setHeroes(response.results); // Keep the received heroes in the state
        setPageCount(Math.ceil(response.total / itemsPerPage)); // Calculate the number of pages
      } catch (error) {
        console.error('Error fetching heroes:', error); // Error logging
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes(); // Call the function to get heroes
  }, [currentPage]); // Executed when currentPage changes

  // Function for processing clicks on the page
  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected); // Update the current page
  };

  // Asynchronous function to open a modal window with the selected hero
  const openModal = async (hero: Hero) => {
    setSelectedHero(hero); // Install the selected hero

    // Get the names of the films of the selected hero
    const titles = await fetchFilmTitles(hero.films);
    setFilmTitles(titles);

    // Get the names of the species of the selected hero
    const speciesNames = await fetchSpeciesNames(hero.species);
    setSpeciesNames(speciesNames);

    // Get the names of the starships of the chosen hero
    const starshipNames = await fetchStarshipNames(hero.starships);
    setStarshipNames(starshipNames);

    // Get the names of the vehicles of the selected hero
    const vehicleNames = await fetchVehicleNames(hero.vehicles);
    setVehicleNames(vehicleNames);

    setIsModalOpen(true); // Open the modal window
  };

  // Function to close the modal window
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
