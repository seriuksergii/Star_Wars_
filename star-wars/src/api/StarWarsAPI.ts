// Function to get hero data from API
export const getHeroes = async (page: number) => {
  // Execute a request to receive data from the API with a page parameter
  const response = await fetch(
    `https://sw-api.starnavi.io/people/?page=${page}`
  );
  // Check if the answers are successful
  if (!response.ok) {
    throw new Error('Unable to load hero data'); // Throw an error if the request fails
  }
  const data = await response.json();
  // Return the results and the total number of heroes
  return {
    results: data.results,
    total: data.count,
  };
};

// Function to get movie titles by their identifiers
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

// Function to get the names of views by their identifiers
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

// Function to get the names of the starships by their identifiers
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

// Function to get the names of the planets by their identifiers
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

// Function to get the names of the vehicles by their identifiers
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
