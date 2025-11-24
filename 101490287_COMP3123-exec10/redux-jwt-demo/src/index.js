import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import './index.css';

// Subscribe demo: log state on every change (for "subscribe" concept)
store.subscribe(() => {
    console.log('Store updated:', store.getState());
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
