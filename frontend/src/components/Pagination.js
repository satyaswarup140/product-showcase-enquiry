export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination">
      {[...Array(totalPages)].map((_, idx) => (
        <button
          key={idx}
          className={`page-btn ${currentPage === idx + 1 ? "active" : ""}`}
          onClick={() => onPageChange(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}

      {currentPage < totalPages && (
        <button className="page-btn" onClick={() => onPageChange(currentPage + 1)}>
          Next →
        </button>
      )}
    </div>
  );
}
