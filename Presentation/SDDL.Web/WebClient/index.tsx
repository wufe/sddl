import * as React from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { render } from 'react-dom';
import './style/index.scss';
import { App } from './components/app/app';

render(<App />, document.getElementById("app"));