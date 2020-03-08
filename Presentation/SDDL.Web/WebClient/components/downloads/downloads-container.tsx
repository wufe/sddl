import * as React from 'react';
import './downloads-container.scss';

export const DownloadsContainer = () => {

    const [active, setActive] = React.useState(false);

    return <div className="downloads-container__component">

        <div className="__header">
            <div className="__header-title">Filter</div>
            <div className="__header-content">
                <button>All</button>
                <button className="--active --success">Recording</button>
                <button>Stopped</button>
            </div>
        </div>

        <div className="__list">
            <div className={`download ${active ? '--active' : ''}`} onClick={() => setActive(!active)}>
                <div className="__column">
                    <div className="__column-header">URL</div>
                    <div className="__column-content">https://hello.warudo</div>
                </div>
                <div className="__column">
                    <div className="__column-header">Status</div>
                    <div className="__column-content --success">Recording</div>
                </div>
            </div>
            <div className="download">
                <div className="__column">
                    <div className="__column-header">URL</div>
                    <div className="__column-content">https://hello.warudo</div>
                </div>
                <div className="__column">
                    <div className="__column-header">Status</div>
                    <div className="__column-content --success">Recording</div>
                </div>
            </div>
        </div>
    </div>;
}