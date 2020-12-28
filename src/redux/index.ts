import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import {rootReducer} from './reducers';

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

export const middleware = [sagaMiddleware];

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose ||
  applyMiddleware(...middleware);

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

const {dispatch} = store;

export type Dispatch = typeof dispatch;
