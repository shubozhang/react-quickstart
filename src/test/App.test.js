import React from 'react';
import ReactDOM from 'react-dom';
import App01 from '../app01_components/app01';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App01 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
