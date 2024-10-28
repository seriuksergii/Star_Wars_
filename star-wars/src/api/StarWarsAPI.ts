export const getHeroes = async (page: number) => {
  const response = await fetch(
    `https://sw-api.starnavi.io/people/?page=${page}`
  );
  if (!response.ok) {
    throw new Error('Unable to load hero data');
  }
  const data = await response.json();
  return {
    results: data.results,
    total: data.count,
  };
};

export const fetchFilmTitles = async (filmIds: string[]) => {
  const titles = await Promise.all(
    filmIds.map(async (id) => {
      const response = await fetch(`https://sw-api.starnavi.io/films/${id}/`);
      const filmData = await response.json();
      return filmData.title;
    })
  );
  return titles;
};

export const fetchSpeciesNames = async (speciesIds: string[]) => {
  const names = await Promise.all(
    speciesIds.map(async (id) => {
      const response = await fetch(`https://sw-api.starnavi.io/species/${id}/`);
      const speciesData = await response.json();
      return speciesData.name;
    })
  );
  return names;
};

export const fetchStarshipNames = async (starshipIds: string[]) => {
  const names = await Promise.all(
    starshipIds.map(async (id) => {
      const response = await fetch(
        `https://sw-api.starnavi.io/starships/${id}/`
      );
      const starshipData = await response.json();
      return starshipData.name;
    })
  );
  return names;
};

export const fetchPlanetName = async (homeworldIds: string[]) => {
  const names = await Promise.all(
    homeworldIds.map(async (id) => {
      const response = await fetch(`https://sw-api.starnavi.io/planets/${id}/`);
      if (!response.ok) {
        throw new Error('Unable to load planet data');
      }
      const planetData = await response.json();
      return planetData.name;
    })
  );
  return names;
};

export const fetchVehicleNames = async (vehicleIds: string[]) => {
  const names = await Promise.all(
    vehicleIds.map(async (id) => {
      const response = await fetch(
        `https://sw-api.starnavi.io/vehicles/${id}/`
      );
      const vehicleData = await response.json();
      return vehicleData.name;
    })
  );
  return names;
};
