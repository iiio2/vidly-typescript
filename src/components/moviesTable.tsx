import Like from '../common/like';
import Movie from '../models/Movie';
import Column from '../models/Column';
import TableHeaderColumn from '../models/TableHeaderItem';
import Table from '../common/table';

interface MoviesTableProps {
  paginatedMovies: Movie[];
  onLike: (movie: Movie) => void;
  onDelete: (movie: Movie) => void;
  onSort: (column: Column) => void;
  sortColumn: Column;
}

const MoviesTable = ({
  paginatedMovies: movies,
  onLike,
  onDelete,
  onSort,
  sortColumn,
}: MoviesTableProps): JSX.Element => {
  const tableHeaderColumns: TableHeaderColumn[] = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      path: 'like',
      content: (movie: Movie) => (
        <Like liked={movie.liked} onLike={() => onLike(movie)} />
      ),
    },
    {
      path: 'delete',
      content: (movie: Movie) => (
        <button
          onClick={() => onDelete(movie)}
          className='btn btn-danger btn-sm'
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <>
      <Table
        tableHeaderColumns={tableHeaderColumns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={movies}
      />
    </>
  );
};

export default MoviesTable;
