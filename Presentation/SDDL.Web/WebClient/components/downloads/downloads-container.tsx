import * as React from 'react';
import './downloads-container.scss';
import { useDownloads } from './downloads-hooks';
import { DownloadsFilter } from '../../state/downloads/downloads-state';

export const DownloadsContainer = () => {

    const [active, setActive] = React.useState(false);
    
    const { activeFilter, setFilter } = useDownloads();

    return <div className="downloads-container__component">

        <div className="__header">
            <div className="__header-title">Filter</div>
            <div className="__header-content">
                <button
                    className={`${activeFilter === DownloadsFilter.ALL ? '--active' : ''}`}
                    onClick={_ => setFilter(DownloadsFilter.ALL)}>All</button>
                <button
                    className={`${activeFilter === DownloadsFilter.RECORDING ? '--active' : ''} --success`}
                    onClick={_ => setFilter(DownloadsFilter.RECORDING)}>Recording</button>
                <button
                    className={`${activeFilter === DownloadsFilter.STOPPED ? '--active' : ''} --danger`}
                    onClick={_ => setFilter(DownloadsFilter.STOPPED)}>Stopped</button>
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