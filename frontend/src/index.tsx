import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/App';

import { store } from './modules/store';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

render();
