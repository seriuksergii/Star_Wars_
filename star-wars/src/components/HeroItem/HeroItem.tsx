import React from 'react';

interface Props {
  src: string;
  alt: string;
  className?: string;
  name: string;
}

export const HeroItem: React.FC<Props> = ({ src, alt, className, name }) => {
  return (
    <li className="hero-item">
      <img src={src} alt={alt} className={className} />
      <p className="hero-name">{name}</p>
    </li>
  );
};
