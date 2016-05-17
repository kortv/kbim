import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import UserPage from './containers/UserPage';
// import StaticPage from './containers/StaticPage';

const routing = window.location.pathname.replace(/(\/public)|(index\.html)/g, '');
console.log(routing);
if (routing === '/') {
  render(<App main />, document.getElementById('app'));
} else if (/\/page/.test(routing)) {
  render(<App static />, document.getElementById('app'));
} else if (/\/edit/.test(routing)) {
  render(<UserPage edit />, document.getElementById('app'));
} else if (/\/user/.test(routing)) {
  render(<UserPage show />, document.getElementById('app'));
}
