import * as React from 'react';
import { Hello } from '../world/world';
import './app.scss';
import { DownloadsContainer } from '../downloads/downloads-container';

export const App = () => <div className="app__component">
    <h1 className="__header">Downloads</h1>
    <DownloadsContainer />
</div>;