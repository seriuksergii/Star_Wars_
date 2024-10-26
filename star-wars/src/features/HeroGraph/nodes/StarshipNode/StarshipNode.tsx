import React from 'react';
import './StarshipNode.scss';

interface StarshipNodeProps {
  name: string;
}

export const StarshipNode: React.FC<StarshipNodeProps> = ({ name }) => (
  <div className="starship-node">
    <p>{`Related Starship: ${name}`}</p>
  </div>
);
