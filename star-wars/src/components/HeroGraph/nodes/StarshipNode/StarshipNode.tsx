import React from 'react';
import { StarshipNodeProps } from '../../../../types/types';

import './StarshipNode.scss';

export const StarshipNode: React.FC<StarshipNodeProps> = ({ name }) => (
  <div className="starship-node">
    <p>{`Related Starship: ${name}`}</p>
  </div>
);
