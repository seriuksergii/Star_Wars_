import React from 'react';
import './FilmNode.scss';
import { FilmNodeProps } from '../../../../types/types';

export const FilmNode: React.FC<FilmNodeProps> = ({ filmName }) => (
  <div className="film-node">
    <p>{`Related Film: ${filmName}`}</p>
  </div>
);
