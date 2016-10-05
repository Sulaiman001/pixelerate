import React from 'react';
import {render} from 'react-dom';

import Button from './components/Button/Button';

import './styles/base.styl';


render(
	<Button label='Click Me'/>,
	document.getElementById('root')
);

// render(
// 	<AppMain/>,
// 	document.getElementById('root')
// );
