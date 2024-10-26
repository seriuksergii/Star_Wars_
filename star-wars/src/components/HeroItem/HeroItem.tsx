import React from 'react';
import './HeroItem.scss';

interface Props {
  src: string;
  alt: string;
  className?: string;
  name: string;
  onClick: () => void;
}

export const HeroItem: React.FC<Props> = ({
  src,
  alt,
  className,
  name,
  onClick,
}) => {
  return (
    <div className="hero-item" onClick={onClick}>
      <img src={src} alt={alt} className={className} />
      <p className="hero-name">{name}</p>
      
    </div>
  );
};
