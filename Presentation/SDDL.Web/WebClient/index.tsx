import * as React from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { render } from 'react-dom';
import './style/index.scss';
import { App } from './components/app/app';
import { StoreProvider } from './state/store';
import { BrowserRouter } from 'react-router-dom';

render(
    <React.StrictMode>
        <StoreProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StoreProvider>
    </React.StrictMode>, document.getElementById("app"));