import * as React from 'react';
import { Hello } from '../world/world';
import './app.scss';

export const App = () => {

    const [active, setActive] = React.useState(false);

    return <div className="app__component">
        <div className="downloads-container__component">
            <div className={`download ${active ? '--active' : ''}`} onClick={() => setActive(!active)}>
                <div className="__column">
                    <div className="__column-header">URL</div>
                    <div className="__column-content">https://hello.warudo</div>
                </div>
                <div className="__column">
                    <div className="__column-header">Status</div>
                    <div className="__column-content">Recording</div>
                </div>
            </div>
            <div className="download">
                <div className="__column">
                    <div className="__column-header">URL</div>
                    <div className="__column-content">https://hello.warudo</div>
                </div>
                <div className="__column">
                    <div className="__column-header">Status</div>
                    <div className="__column-content">Recording</div>
                </div>
            </div>
        </div>
    </div>;
}