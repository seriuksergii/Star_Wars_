import React from 'react';
import Modal from 'react-modal';
import { HeroGraph } from '../../components/HeroGraph';
import { HeroModalProps } from '../../types/types';
import { extractIdFromUrl } from '../../utils/utils';
import { IoMdCloseCircle } from 'react-icons/io';
import './HeroModal.scss';

export const HeroModal: React.FC<HeroModalProps> = ({
  isOpen,
  selectedHero,
  filmTitles,
  starshipNames,
  close,
}) => {
  if (!selectedHero) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      contentLabel="Hero Details"
      ariaHideApp={false}
    >
      <button className="close-button" onClick={close}>
        <IoMdCloseCircle />
      </button>
      <HeroGraph
        heroName={selectedHero.name}
        birthYear={selectedHero.birth_year}
        eyeColor={selectedHero.eye_color}
        gender={selectedHero.gender}
        hairColor={selectedHero.hair_color}
        height={selectedHero.height}
        mass={selectedHero.mass}
        skinColor={selectedHero.skin_color}
        homeworld={selectedHero.homeworld}
        films={filmTitles}
        filmNames={filmTitles}
        starships={starshipNames}
        heroImage={`https://starwars-visualguide.com/assets/img/characters/${extractIdFromUrl(
          selectedHero.url
        )}.jpg`}
        close={close}
      />
    </Modal>
  );
};
