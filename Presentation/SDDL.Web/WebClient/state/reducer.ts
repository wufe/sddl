import { createContext, Reducer, Context, Dispatch } from "react";
import { TDownloadsState, initialDownloadsState, downloadsReducer } from "./downloads/downloads-state";
import { TAction } from "./types";
import { TAppState, initialAppState, appReducer } from "./app/app-state";

export type TGlobalState = {
    app      : TAppState;
    downloads: TDownloadsState;
}

export const initialGlobalState: TGlobalState = {
    app      : initialAppState,
    downloads: initialDownloadsState,
}

export const rootContext: Context<{state: TGlobalState, dispatch: Dispatch<TAction>}>
    = createContext({state: initialGlobalState, dispatch: _ => {}});

export const rootReducer: Reducer<TGlobalState, TAction> = (state = initialGlobalState, action) => {
    state = {
        ...state,
        app: appReducer(state.app, action),
        downloads: downloadsReducer(state.downloads, action)
    }
    return state;
}