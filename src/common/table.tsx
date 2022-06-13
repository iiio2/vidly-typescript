import TableHeader from './tableHeader';
import TableBody from './tableBody';
import TableHeaderColumns from '../models/TableHeaderItem';
import Column from '../models/Column';
import Movie from '../models/Movie';

interface TableProps {
  tableHeaderColumns: TableHeaderColumns[];
  sortColumn: Column;
  onSort: (column: Column) => void;
  data: Movie[];
}

const Table = ({
  tableHeaderColumns,
  sortColumn,
  onSort,
  data,
}: TableProps): JSX.Element => {
  return (
    <>
      <table className='table table-striped'>
        <TableHeader
          tableHeaderColumns={tableHeaderColumns}
          sortColumn={sortColumn}
          onSort={onSort}
        />

        <TableBody data={data} columns={tableHeaderColumns} />
      </table>
    </>
  );
};

export default Table;
