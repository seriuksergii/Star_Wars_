import React from 'react';
import { HeroNodeProps } from '../../../../types/types';

import './HeroNode.scss';

export const HeroNode: React.FC<HeroNodeProps> = ({
  heroImage,
  heroName,
  birthYear,
  eyeColor,
  gender,
  hairColor,
  height,
  mass,
  skinColor,
  homeworld,
}) => (
  <div className="hero-node">
    <img src={heroImage} alt={heroName} className="hero-image" />
    <div className="hero-info">
      <p>{`Name: ${heroName}`}</p>
      <p>{`Birth Year: ${birthYear}`}</p>
      <p>{`Eye Color: ${eyeColor}`}</p>
      <p>{`Gender: ${gender}`}</p>
      <p>{`Hair Color: ${hairColor}`}</p>
      <p>{`Height: ${height}`}</p>
      <p>{`Mass: ${mass}`}</p>
      <p>{`Skin Color: ${skinColor}`}</p>
      <p>{`Homeworld: ${homeworld}`}</p>
    </div>
  </div>
);
