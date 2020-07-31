import * as genresAPI from "./fakeGenreService";

const records = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "The Dark Side of The Moon",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    numberInStock: 6,
    dailyRentalRate: 4.3,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Sgt. Pepper's Lonely Hearts Club Band",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    numberInStock: 5,
    dailyRentalRate: 4.7,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "A Night at the Opera",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Rock" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "To Pimp a Butterfly",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Hip Hop" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Scorpion",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Hip Hop" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Come On Over",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Country" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Take Care",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Hip Hop" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Back in Black",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Rock" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Homework",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "EDM" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Orbital 20",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "EDM" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Computer World",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "EDM" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
];

export function getRecords() {
  return records;
}

export function getRecord(id) {
  return records.find((r) => r._id === id);
}

export function saveRecord(record) {
  let recordInDb = records.find((r) => r._id === record._id) || {};
  recordInDb.name = record.name;
  recordInDb.genre = genresAPI.genres.find((g) => g._id === record.genreId);
  recordInDb.numberInStock = record.numberInStock;
  recordInDb.dailyRentalRate = record.dailyRentalRate;

  if (!recordInDb._id) {
    recordInDb._id = Date.now();
    records.push(recordInDb);
  }

  return recordInDb;
}

export function deleteRecord(id) {
  let recordInDb = records.find((m) => m._id === id);
  records.splice(records.indexOf(recordInDb), 1);
  return recordInDb;
}
