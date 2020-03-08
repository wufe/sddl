import { createContext, Reducer, Context, Dispatch } from "react";
import { TDownloadsState, initialDownloadsState, downloadsReducer } from "./downloads/downloads-state";
import { TAction } from "./types";

export type TGlobalState = {
    downloads: TDownloadsState;
}

export const initialGlobalState: TGlobalState = {
    downloads: initialDownloadsState
}

export const rootContext: Context<{state: TGlobalState, dispatch: Dispatch<TAction>}>
    = createContext({state: initialGlobalState, dispatch: _ => {}});

export const rootReducer: Reducer<TGlobalState, TAction> = (state = initialGlobalState, action) => {
    state = {
        ...state,
        downloads: downloadsReducer(state.downloads, action)
    }
    return state;
}