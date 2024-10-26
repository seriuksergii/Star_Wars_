import React from 'react';
import './HeroNode.scss';

interface Props {
  heroImage: string;
  heroName: string;
  birthYear: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: string;
  mass: string;
  skinColor: string;
  homeworld: string;
}

export const HeroNode: React.FC<Props> = ({
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
