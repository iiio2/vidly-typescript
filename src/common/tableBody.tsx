import Movie from '../models/Movie';
import TableHeaderColumns from '../models/TableHeaderItem';
import _ from 'lodash';

interface MoviesTableProps {
  data: Movie[];
  columns: TableHeaderColumns[];
}

const TableBody = ({ data, columns }: MoviesTableProps): JSX.Element => {
  const renderCell = (item: Movie, column: TableHeaderColumns) => {
    if (column.content) {
      return column.content(item);
    }
    return _.get(item, column.path);
  };

  const createKey = (item: Movie, column: TableHeaderColumns) => {
    return item._id + column.path;
  };

  return (
    <>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={createKey(item, column)}>{renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TableBody;
