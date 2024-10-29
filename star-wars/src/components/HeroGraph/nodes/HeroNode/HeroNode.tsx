import React from 'react';

import { HeroNodeProps } from '../../../../types/types';

import './HeroNode.scss';

// Declare a HeroNode component that accepts HeroNodeProps
export const HeroNode: React.FC<HeroNodeProps> = ({
  heroImage,
  heroName,
  birth_year,
  eye_color,
  gender,
  hair_color,
  height,
  mass,
  skin_color,
  homeworld,
}) => (
  // Сontainer for displaying information about the hero
  <div className="hero-node">
    <img src={heroImage} alt={heroName} className="hero-image" />
    <div className="hero-info">
      <p>{`Name: ${heroName}`}</p>
      <p>{`Birth Year: ${birth_year}`}</p>
      <p>{`Eye Color: ${eye_color}`}</p>
      <p>{`Gender: ${gender}`}</p>
      <p>{`Hair Color: ${hair_color}`}</p>
      <p>{`Height: ${height}`}</p>
      <p>{`Mass: ${mass}`}</p>
      <p>{`Skin Color: ${skin_color}`}</p>
      <p>{`Homeworld: ${homeworld}`}</p>
    </div>
  </div>
);
