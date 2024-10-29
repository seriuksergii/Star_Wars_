import React from 'react';

import { FilmNodeProps } from '../../../../types/types';
import './FilmNode.scss';

// Declare a FilmNode component that accepts FilmNodeProps
export const FilmNode: React.FC<FilmNodeProps> = ({ filmName }) => (
  <div className="film-node">
    <p>{`Related Film: ${filmName}`}</p>
  </div>
);
