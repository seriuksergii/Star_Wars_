export const getHeroes = async (page: number) => {
  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  if (!response.ok) {
    throw new Error('Unable to load hero data');
  }
  const data = await response.json();
  return {
    results: data.results,
    total: data.count,
  };
};
