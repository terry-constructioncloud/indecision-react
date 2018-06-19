import ReactDom from 'react-dom';
import React from 'react';
import IndecisionApp from './components/IndecisionApp';
import  'normalize.css/normalize.css';
import  './styles/styles.scss';

ReactDom.render(
  <IndecisionApp options={['one', 'two']}/>, document.getElementById('app'));
