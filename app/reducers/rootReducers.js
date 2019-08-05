import { combineReducers } from 'redux';

import sourcesReducers from './sourcesReducers';

const rootReducers = combineReducers({ sourcesReducers });

export default rootReducers;
