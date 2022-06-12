import _ from 'lodash';

interface PaginationProps {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  itemsCount,
  pageSize,
  onPageChange,
  currentPage,
}: PaginationProps): JSX.Element => {
  const pageCount: number = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null!;
  const pages = _.range(1, pageCount + 1);

  return (
    <>
      <nav aria-label='navigation'>
        <ul className='pagination'>
          {pages.map((page) => (
            <li
              onClick={() => onPageChange(page)}
              className={
                page === currentPage ? 'page-item active' : 'page-item'
              }
              key={page}
            >
              <a href='#' className='page-link'>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
