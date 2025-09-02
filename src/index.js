import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Blog } from './Blog.jsx';
import { Provider } from 'react-redux';
import { store } from './store.js';

import './index.css';
// import { router } from 'json-server';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<Blog />
		</Provider>
	</BrowserRouter>,
);
