import React from 'react';

import { HeroItemProps } from '../../types/types';
import './HeroItem.scss';

// Declaration of HeroItem functional component with HeroItemProps type
export const HeroItem: React.FC<HeroItemProps> = ({
  src,
  alt,
  className,
  name,
  onClick,
}) => {
  return (
    // Info about hero
    <div className="hero-item" data-testid="hero-item" onClick={onClick}>
      <img src={src} alt={alt} className={className} />
      <p className="hero-name" data-testid="hero-name">
        {name}
      </p>
    </div>
  );
};
