import * as React from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { render } from 'react-dom';
import './style/index.scss';
import { App } from './components/app/app';
import { StoreProvider } from './state/store';

render(
    <React.StrictMode>
        <StoreProvider>
            <App />
        </StoreProvider>
    </React.StrictMode>, document.getElementById("app"));