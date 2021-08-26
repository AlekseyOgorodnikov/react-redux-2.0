import { applyMiddleware, createStore } from 'redux';

import { rootReducer } from '../reducers';
// logger
import logger from 'redux-logger';
// redux-thunk
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk, logger)); // second function reducer
