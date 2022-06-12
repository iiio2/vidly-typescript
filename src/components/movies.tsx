import { useState, useEffect } from 'react';
import _ from 'lodash';
import Movie from '../models/Movie';
import Genre from '../models/Genre';
import Column from '../models/Column';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from '../common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from '../common/listGroup';
import MoviesTable from './moviesTable';

const Movies = (): JSX.Element => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [pageSize, setPageSize] = useState<number>(4);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentGenre, setCurrentGenre] = useState<Genre>({
    _id: '',
    name: '',
  });

  const [sortColumn, setSortColumn] = useState<Column>({
    path: '',
    order: 'asc',
  });

  const getAllMovies = () => {
    setMovies(getMovies());
  };

  const getAllGenres = () => {
    const allGenres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
    setGenres(allGenres);
  };

  useEffect(() => {
    getAllMovies();
    getAllGenres();
  }, []);

  const handleDelete = (movie: Movie) => {
    setMovies(movies.filter((m) => m._id !== movie._id));
  };

  const handleLike = (movie: Movie) => {
    const allMovies = [...movies];
    const index = allMovies.findIndex((m) => m._id === movie._id);
    allMovies[index].liked = !allMovies[index].liked;
    setMovies(allMovies);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleGenreSelect = (genre: Genre) => {
    setCurrentGenre(genre);
    setCurrentPage(1);
  };

  const handleSort = (column: Column) => {
    setSortColumn({ ...sortColumn, ...column });
  };

  const filteredMovies =
    currentGenre && currentGenre._id
      ? movies.filter((m) => m.genre._id === currentGenre._id)
      : movies;

  const sortedMovies = _.orderBy(
    filteredMovies,
    [sortColumn.path],
    [sortColumn.order]
  );

  const paginatedMovies = paginate(sortedMovies, currentPage, pageSize);

  return (
    <>
      <h3>Movies</h3>
      <div className='row'>
        <div className='col-sm-2'>
          <ListGroup
            genres={genres}
            onGenreSelect={handleGenreSelect}
            currentGenre={currentGenre}
          />
        </div>
        <div className='col'>
          <MoviesTable
            paginatedMovies={paginatedMovies}
            onLike={handleLike}
            onDelete={handleDelete}
            onSort={handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={filteredMovies.length}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Movies;
