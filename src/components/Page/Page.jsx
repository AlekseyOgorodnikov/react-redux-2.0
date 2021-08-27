import React from 'react';

import PropTypes from 'prop-types';

export const Page = (props) => {
  const { photos, year, isFetching, error } = props;

  const onButtonClick = (event) => {
    const year = Number(event.currentTarget.innerText);
    props.getPhotos(year);
  };

  const years = [2020, 2019, 2018, 2017, 2016];

  return (
    <div>
      <div className="button">
        {years.map((item, index) => {
          return (
            <button key={index} className="btn" onClick={onButtonClick}>
              {item}
            </button>
          );
        })}
      </div>

      <h3>
        Year {year} photos [{photos.length}]{' '}
      </h3>

      <div className="photo-wrap">
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          photos.map((entry, index) => {
            return (
              <div className="photo" key={index}>
                <div className="photo-item">
                  <img className="img-vk" src={entry.sizes[0].url} alt="" />
                  <p className="photo-item_text">{entry.likes.count}</p>
                </div>
              </div>
            );
          })
        )}
      </div>

      {error ? <p>Loading photos is error</p> : ''}
    </div>
  );
};

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
