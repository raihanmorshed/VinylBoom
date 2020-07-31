export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Hip Hop" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Country" },
  { _id: "5b21ca3eeb7f6fbccd471888", name: "EDM" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
