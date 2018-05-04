import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



/*

///For persisting redux state to local storage///

const loadState = () => {
  const state = localStorage.getItem('flickr-state');
  if (state === null) {
    return undefined;
  }
  return JSON.parse(state);
};

const saveState = state => {
  const newState = JSON.stringify(state);
  localStorage.setItem('flickr-state', newState);
};

const persistedState = loadState();
*/

const store = configureStore();

//store.subscribe(() => saveState(store.getState()));

const render = Component => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

registerServiceWorker();

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
