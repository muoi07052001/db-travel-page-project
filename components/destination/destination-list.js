import classes from "./destination-list.module.css";
import DestinationItem from "./destination-item";
import { Fragment, useState } from "react";

import Pagination from "../pagination";

function DestinationList(props) {
  const { destinations } = props;

  const [pageSize] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;

  const currentDestinations = destinations.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  function selectCurrentPage(page) {
    setCurrentPage(page);
  }

  return (
    <Fragment>
      <ul className={classes["destination-list"]}>
        {currentDestinations.map((destination) => (
          <DestinationItem
            key={destination.DiaDiemID}
            TourID={destination.TourID}
            TenTour={destination.TieuDe}
            TenDiaDiem={destination.TenDiaDiem}
            Anh={destination.Anh}
            MoTa={destination.MoTa}
          />
        ))}
      </ul>
      <Pagination
        pageSize={pageSize}
        setCurrentPage={selectCurrentPage}
        currentPage={currentPage}
        total={destinations.length}
      />
    </Fragment>
  );
}

export default DestinationList;
