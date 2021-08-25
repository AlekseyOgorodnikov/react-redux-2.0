import React from 'react';

import { connect } from 'react-redux';

import './App.css';

import { Page } from '../components/Page/Page';
import { User } from '../components/User/User';
import { setYear } from '../actions/PageActions';

function App(props) {
  const { user, page, setYearAction } = props;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Top photo</h1>
        <p className="App-intro">
          Maximum likes photo, in my profile vkontake!
        </p>
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} setYear={setYearAction} />
      </header>
    </div>
  );
}

const mapStateToProps = (store) => {
  // console.log(store);
  return {
    user: store.user,
    page: store.page,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setYearAction: (year) => dispatch(setYear(year)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
