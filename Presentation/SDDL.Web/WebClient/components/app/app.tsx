import * as React from 'react';
import './app.scss';
import { DownloadsContainer } from '~/components/pages/downloads/downloads-container/downloads-container';
import { Route, Link } from 'react-router-dom';
import Downloads from '../pages/downloads/downloads';
import loadable from '@loadable/component';
import { AppWrapper } from '../modal/app-wrapper';

const DashboardPage = loadable(() => import('~/components/pages/dashboard/dashboard'));
const DownloadsPage = loadable(() => import('~/components/pages/downloads/downloads'));

export const App = () => 
    <AppWrapper>
        <div className="app__component">
            <div className="__menu">
                <Link className="__menu-item" to="/">Dashboard</Link>
                <Link className="__menu-item" to="/downloads">Downloads</Link>
                <Link className="__menu-item" to="/plugins">Plugins</Link>
            </div>
            <Route exact path="/">
                <DashboardPage />
            </Route>
            <Route path="/downloads">
                <DownloadsPage />
            </Route>
        </div>
    </AppWrapper>;