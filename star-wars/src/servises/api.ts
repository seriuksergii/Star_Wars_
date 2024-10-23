export const getHeroes = async (page: number) => {
  const response = await fetch(
    `https://sw-api.starnavi.io/people/?page=${page}`
  );
  if (!response.ok) {
    throw new Error('Unable to load hero data');
  }
  return await response.json();
};
