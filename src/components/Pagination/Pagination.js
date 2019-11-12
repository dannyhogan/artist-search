import React from 'react';
import PropTypes from 'prop-types';

export default function Pagination({ pageUp, pageDown, count = 1, page }) {

  const totalPages = Math.ceil(count / 25);
  const clickableDown = page > 1 ? false : true;
  const clickableUp = page >= totalPages ? true : false;
  if(count === 0) page = 0;
  
  return (
    <>
      <button disabled={clickableDown} onClick={() => pageDown()}>←</button>
      <label>Page {page} of {totalPages}</label>
      <button disabled={clickableUp} onClick={() => pageUp()}>→</button>
    </>
  );
}

Pagination.propTypes = {
  pageUp: PropTypes.func.isRequired,
  pageDown: PropTypes.func.isRequired,
  count: PropTypes.number,
  page: PropTypes.number
};
