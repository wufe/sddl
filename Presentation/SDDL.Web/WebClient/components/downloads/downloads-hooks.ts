import { useStore } from '../../state/hook';
import { DownloadsAction, DownloadsFilter } from '../../state/downloads/downloads-state';

export const useDownloads = () => {
    const {state, dispatch} = useStore();
    return {
        activeFilter: state.downloads.filter,
        setFilter: (filter: DownloadsFilter) => dispatch({ type: DownloadsAction.SET_FILTER, payload: filter }),
    }
};