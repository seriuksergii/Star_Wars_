import React from 'react';
import Modal from 'react-modal';
import { HeroGraph } from '../../components/HeroGraph';
import { HeroModalProps } from '../../types/types';
import { extractIdFromUrl } from '../../utils/utils';
import { IoMdCloseCircle } from 'react-icons/io';

import './HeroModal.scss';

// Announce the HeroModal functional component that accepts' HeroModalProps'
export const HeroModal: React.FC<HeroModalProps> = ({
  isOpen,
  selectedHero,
  filmTitles,
  starshipNames,
  close,
}) => {
  //If the hero is not selected, then return 'null' so as not to render anything
  if (!selectedHero) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      className={'modal'}
      contentLabel="Hero Details"
      ariaHideApp={false}
      style={{
        content: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          padding: 0,
          border: 'none',
          borderRadius: '0',
        },
      }}
    >
      {/* Button to close modal window */}
      <button className="close-button" onClick={close}>
        <IoMdCloseCircle />
      </button>
      {/* Display graphical information about the hero using the HeroGraph component */}
      <HeroGraph
        heroName={selectedHero.name}
        birth_year={selectedHero.birth_year}
        eye_color={selectedHero.eye_color}
        gender={selectedHero.gender}
        hair_color={selectedHero.hair_color}
        height={selectedHero.height}
        mass={selectedHero.mass}
        skin_color={selectedHero.skin_color}
        homeworld={selectedHero.homeworld}
        films={filmTitles}
        starships={starshipNames}
        heroImage={`https://starwars-visualguide.com/assets/img/characters/${extractIdFromUrl(
          selectedHero.url
        )}.jpg`}
        close={close}
        filmNames={[]}
      />
    </Modal>
  );
};
