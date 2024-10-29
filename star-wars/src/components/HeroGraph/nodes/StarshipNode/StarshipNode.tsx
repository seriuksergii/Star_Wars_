import React from 'react';
import { StarshipNodeProps } from '../../../../types/types';

import './StarshipNode.scss';

//Declare a StarshipNode component that accepts props of type StarshipNodeProps
export const StarshipNode: React.FC<StarshipNodeProps> = ({ name }) => (
  <div className="starship-node">
    <p>{`Related Starship: ${name}`}</p>
  </div>
);
