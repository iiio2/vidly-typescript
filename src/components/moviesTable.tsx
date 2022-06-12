import Like from '../common/like';
import Movie from '../models/Movie';
import Column from '../models/Column';

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
  const raiseSort = (path: string) => {
    const column = { ...sortColumn };
    if (path === column.path) {
      column.order = column.order === 'asc' ? 'desc' : 'asc';
    } else {
      column.path = path;
      column.order = 'asc';
    }
    onSort(column);
  };

  return (
    <>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th
              style={{ cursor: 'pointer' }}
              onClick={() => raiseSort('title')}
            >
              Title
            </th>
            <th
              style={{ cursor: 'pointer' }}
              onClick={() => raiseSort('genre.name')}
            >
              Genre
            </th>
            <th
              style={{ cursor: 'pointer' }}
              onClick={() => raiseSort('numberInStock')}
            >
              Stock
            </th>
            <th
              style={{ cursor: 'pointer' }}
              onClick={() => raiseSort('dailyRentalRate')}
            >
              Rate
            </th>
          </tr>
        </thead>

        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onLike={() => onLike(movie)} />
              </td>
              <td>
                {' '}
                <button
                  onClick={() => onDelete(movie)}
                  className='btn btn-danger btn-sm'
                >
                  Delete
                </button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MoviesTable;
