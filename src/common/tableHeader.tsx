import TableHeaderColumn from '../models/TableHeaderItem';
import Column from '../models/Column';

interface MoviesTableProps {
  tableHeaderColumns: TableHeaderColumn[];
  sortColumn: Column;
  onSort: (column: Column) => void;
}

const TableHeader = ({
  tableHeaderColumns,
  sortColumn,
  onSort,
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

  const raiseSortIcon = (column: TableHeaderColumn) => {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === 'asc') return <i className='fa fa-sort-asc'></i>;
    return <i className='fa fa-sort-desc'></i>;
  };

  return (
    <thead>
      <tr>
        {tableHeaderColumns.map((column) => (
          <th
            key={column.path}
            onClick={() => raiseSort(column.path)}
            style={{ cursor: 'pointer' }}
          >
            {column.label} {raiseSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
