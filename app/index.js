import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import StaticPage from './containers/StaticPage';

const routing = window.location.pathname.replace(/(\/public)|(index\.html)/g, '');
console.log(routing);
if (routing === '/') {
  render(<App />, document.getElementById('app'));
} else if (/\/page/.test(routing)) {
  render(<StaticPage />, document.getElementById('app'));
}
