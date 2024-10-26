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
  title: string;
}

export interface StarshipNodeProps {
  name: string;
}
