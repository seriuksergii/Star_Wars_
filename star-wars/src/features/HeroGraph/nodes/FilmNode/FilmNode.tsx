import React from 'react';
import './FilmNode.scss';

interface Props {
  filmName: string;
}

export const FilmNode: React.FC<Props> = ({ filmName }) => (
  <div className="movie-node">
    <p>{`Related Film: ${filmName}`}</p>
  </div>
);
