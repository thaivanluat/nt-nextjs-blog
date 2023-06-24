const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(items / pageSize); // 100/10

    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {currentPage > 1 && (
                        <li className="page-item">
                            <a className="page-link" onClick={() => onPageChange(currentPage-1)}>
                                Previous
                            </a>
                        </li>
                    )}
                    {pages.map((page) => (
                        <li
                            key={page}
                            className={`page-item
                            ${page === currentPage ? "active" : ""}`}
                        >
                            <a
                                className="page-link"
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </a>
                        </li>
                    ))}
                    {currentPage != pagesCount && (
                        <li className="page-item">
                            <a className="page-link" onClick={() => onPageChange(currentPage+1)}>
                                Next
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;


export const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
   };