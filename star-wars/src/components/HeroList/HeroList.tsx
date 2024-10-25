import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { getHeroes } from '../../servises/api';
import { HeroItem } from '../HeroItem/HeroItem';
import { Loader } from '../Loader/Loader';
import Modal from 'react-modal';
import './HeroList.scss';
import { HeroFlow } from '../HeroFlow/HeroFlow';

interface Hero {
  name: string;
  url: string;
  homeworld: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  close: () => void;
}

export const HeroList: React.FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [filmTitles, setFilmTitles] = useState<string[]>([]);
  const [speciesNames, setSpeciesNames] = useState<string[]>([]);
  const [starshipNames, setStarshipNames] = useState<string[]>([]);
  const [vehicleNames, setVehicleNames] = useState<string[]>([]);

  const extractIdFromUrl = (url: string) => {
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1];
  };

  const fetchFilmTitles = async (filmIds: string[]) => {
    const titles = await Promise.all(
      filmIds.map(async (id) => {
        const response = await fetch(`https://sw-api.starnavi.io/films/${id}/`);
        const filmData = await response.json();
        return filmData.title;
      })
    );
    return titles;
  };

  const fetchSpeciesNames = async (speciesIds: string[]) => {
    const names = await Promise.all(
      speciesIds.map(async (id) => {
        const response = await fetch(
          `https://sw-api.starnavi.io/species/${id}/`
        );
        const speciesData = await response.json();
        return speciesData.name;
      })
    );
    return names;
  };

  const fetchStarshipNames = async (starshipIds: string[]) => {
    const names = await Promise.all(
      starshipIds.map(async (id) => {
        const response = await fetch(
          `https://sw-api.starnavi.io/starships/${id}/`
        );
        const starshipData = await response.json();
        return starshipData.name;
      })
    );
    return names;
  };

  const fetchVehicleNames = async (vehicleIds: string[]) => {
    const names = await Promise.all(
      vehicleIds.map(async (id) => {
        const response = await fetch(
          `https://sw-api.starnavi.io/vehicles/${id}/`
        );
        const vehicleData = await response.json();
        return vehicleData.name;
      })
    );
    return names;
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

  const openModal = async (hero: Hero) => {
    setSelectedHero(hero);

    // Отримуємо назви фільмів, видів, зіркових кораблів та транспортних засобів
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
              ariaHideApp={false}
            >
              <HeroFlow
                heroName={selectedHero.name}
                birthYear={selectedHero.birth_year}
                eyeColor={selectedHero.eye_color}
                gender={selectedHero.gender}
                hairColor={selectedHero.hair_color}
                height={selectedHero.height}
                mass={selectedHero.mass}
                skinColor={selectedHero.skin_color}
                homeworld={selectedHero.homeworld} // Передати URL або відповідну назву
                films={filmTitles}
                starships={starshipNames}
                heroImage={`https://starwars-visualguide.com/assets/img/characters/${extractIdFromUrl(
                  selectedHero.url
                )}.jpg`}
                close={closeModal}
              />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};
