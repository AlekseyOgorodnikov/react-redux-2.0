import React from 'react';

import { connect } from 'react-redux';

import { Page } from '../components/Page/Page';
import { getPhotos } from '../actions/PageActions';

function PageContainer(props) {
  const { page, getPhotoAction } = props;

  return (
    <Page
      photos={page.photos}
      year={page.year}
      getPhotos={getPhotoAction}
      isFetching={page.isFetching}
      error={page.error}
    />
  );
}

const mapStateToProps = (store) => {
  return {
    page: store.page,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getPhotoAction: (year) => dispatch(getPhotos(year)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
