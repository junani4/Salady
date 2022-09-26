import React,{ useState }from "react";
import '../css/Paging.css';
import Pagination from "react-js-pagination";

const Paging = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Pagination
      hideDisabled
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={100}
      pageRangeDisplayed={10}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

export default Paging;