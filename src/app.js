import ReactDom from 'react-dom';
import React from 'react';
import IndecisionApp from './components/IndecisionApp';

ReactDom.render(
  <IndecisionApp options={['one', 'two']}/>, document.getElementById('app'));
