import Genre from './Genre';

export default interface Movie {
  _id: string;
  title: string;
  name?: string;
  genre: Genre;
  numberInStock: number;
  dailyRentalRate: number;
  publishDate?: string;
  liked?: boolean;
}
