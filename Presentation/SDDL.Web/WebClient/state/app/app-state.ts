import { TAction } from "../types"
import { Reducer } from "react";

export type TAppState = {
    loading: boolean;
    modal: {
        visible: boolean;
    };
}

export enum AppAction {
    SET_LOADING          = 'app/setLoading',
    SET_MODAL_VISIBILITY = 'app/setModalVisibility',
}

type TAppAction = TAction & {
    type: AppAction
}

export const initialAppState: TAppState = {
    loading: false,
    modal: {
        visible: false,
    }
};

export const appReducer: Reducer<TAppState, TAppAction> = (state = initialAppState, action) => {
    switch (action.type) {
        case AppAction.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case AppAction.SET_MODAL_VISIBILITY:
            return {
                ...state,
                modal: {
                    visible: action.payload || false
                }
            }
        default:
            return state;
    }
}