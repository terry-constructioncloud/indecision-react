import ReactDom from 'react-dom';
import React from 'react';
import IndecisionApp from './components/IndecisionApp';

const appRoot = document.getElementById('app');
ReactDom.render(<IndecisionApp options={['one', 'two']}/>, appRoot);
