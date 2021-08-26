import React from 'react';

import PropTypes from 'prop-types';

export const Page = (props) => {
  const { photos, year, isFetching } = props;

  const onButtonClick = (event) => {
    const year = Number(event.currentTarget.innerText);
    props.getPhoto(year);
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
      <h3>Photo year {year}</h3>
      {isFetching ? <p>Loading...</p> : <p>You have {photos.length} photo.</p>}
    </div>
  );
};

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhoto: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
