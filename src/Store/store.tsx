import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import dataReducer from './reducers/common'; // Create your reducer


const rootReducer = combineReducers({
 data: dataReducer,
});


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export default store;