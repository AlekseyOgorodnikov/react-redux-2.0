import React from 'react';

import PropTypes from 'prop-types';

export const Page = (props) => {
  const { photos, year } = props;
  return (
    <div>
      <p>
        You page {photos.length} photo {year}
      </p>
    </div>
  );
};

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
};
