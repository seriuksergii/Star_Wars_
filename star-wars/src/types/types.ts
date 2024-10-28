export interface Hero {
  name: string;
  url: string;
  homeworld: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  close: () => void;
}

export interface HeroItemProps {
  src: string;
  alt: string;
  className?: string;
  name: string;
  onClick: () => void;
}

export interface HeroGraphProps {
  heroName: string;
  birthYear: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: string;
  mass: string;
  skinColor: string;
  homeworld: string;
  films: string[];
  starships: string[];
  heroImage: string;
  filmNames: string[];
  close: () => void;
}

export interface HeroNodeProps {
  heroImage: string;
  heroName: string;
  birthYear: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: string;
  mass: string;
  skinColor: string;
  homeworld: string;
}

export interface FilmNodeProps {
  filmName: string;
}

export interface StarshipNodeProps {
  name: string;
}

export interface HeroModalProps {
  isOpen: boolean;
  selectedHero: Hero | null;
  filmTitles: string[];
  starshipNames: string[];
  close: () => void;
}
