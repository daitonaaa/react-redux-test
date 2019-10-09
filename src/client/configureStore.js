import logger from 'redux-logger';
import rootReducer from '@reducers';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux';

const isProductionBuild = process.env.NODE_ENV === 'production';
const sagaMiddleware = createSagaMiddleware();


const getMiddlewares = () => {
  if (isProductionBuild) return applyMiddleware(
	  sagaMiddleware
  );

  return applyMiddleware(
	  sagaMiddleware,
    logger,
  );
};


export default (initialState) => {
	const store = createStore(rootReducer, initialState, getMiddlewares());
	store.runSaga = sagaMiddleware.run;
	
	return store;
};
