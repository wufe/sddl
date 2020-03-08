import { Reducer } from "react"
import { TAction } from "../types"

export type TDownloadsState = {
    filter: DownloadsFilter;
}

export enum DownloadsFilter {
    ALL       = 'all',
    RECORDING = 'recording',
    STOPPED   = 'stopped',
}

export enum DownloadsAction {
    SET_FILTER = 'downloads/setFilter',
}

type TDownloadsAction = TAction & {
    type: DownloadsAction;
}

export const initialDownloadsState: TDownloadsState = {
    filter: DownloadsFilter.RECORDING
};

export const downloadsReducer: Reducer<TDownloadsState, TDownloadsAction> = (state = initialDownloadsState, action) => {
    switch (action.type) {
        case DownloadsAction.SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }
}