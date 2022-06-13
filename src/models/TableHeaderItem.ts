import Movie from './Movie';

export default interface TableHeaderColumn {
  path: string;
  label?: string;
  content?: (movie: Movie) => void;
}
