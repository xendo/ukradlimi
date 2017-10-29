import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card imageUrl="https://olxpl-ring02.akamaized.net/images_tablicapl/562101776_1_261x203_rower-szosowy-kellys-arc-10-lubon.jpg" />, div);
});