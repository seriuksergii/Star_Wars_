import React from 'react';
import { HeroList } from '../components/HeroList/HeroList';

//I declare the functional component Homepage with typing TypeScript (React.FC).
export const Homepage: React.FC = () => {
  return (
    <div>
      <HeroList />
    </div>
  );
};
