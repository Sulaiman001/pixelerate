import React from 'react';
import {render} from 'react-dom';

import PracticeComponent from './components/PracticeComponent';

import './styles/main.styl';


render(<PracticeComponent text='Lookit this shit, rendering stuff'/>, document.getElementById('root'));