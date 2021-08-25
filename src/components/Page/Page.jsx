import React from 'react';

import PropTypes from 'prop-types';

export const Page = (props) => {
  const { photos, year } = props;

  const onButtonClick = (event) => {
    const year = Number(event.currentTarget.innerText);
    props.setYear(year);
  };

  return (
    <div>
      <div className="button">
        <button onClick={onButtonClick}>2018</button>
        <button onClick={onButtonClick}>2017</button>
        <button onClick={onButtonClick}>2016</button>
        <button onClick={onButtonClick}>2015</button>
        <button onClick={onButtonClick}>2014</button>
      </div>
      <p>
        You page {photos.length} photo {year}
      </p>
    </div>
  );
};

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired,
};
