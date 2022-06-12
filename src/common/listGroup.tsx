import Genre from '../models/Genre';

interface GenreProps {
  genres: Genre[];
  currentGenre: Genre;
  onGenreSelect: (genre: Genre) => void;
}

const ListGroup = ({ genres, onGenreSelect, currentGenre }: GenreProps) => {
  return (
    <>
      <ul className='list-group'>
        {genres.map((genre) => (
          <li
            onClick={() => onGenreSelect(genre)}
            className={
              genre.name === currentGenre.name
                ? 'list-group-item active'
                : 'list-group-item'
            }
            style={{ cursor: 'pointer' }}
            key={genre._id}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
