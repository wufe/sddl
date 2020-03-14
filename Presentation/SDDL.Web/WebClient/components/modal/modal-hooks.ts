import { useStore } from "~/state/hook"
import { AppAction } from "~/state/app/app-state";
import { createContext, Context } from "react";

export const modalContext: React.Context<{ node?: HTMLDivElement }> = createContext({});

export const useModal = () => {
    const {state, dispatch} = useStore();
    return {
        visible: state.app.modal.visible,
        setVisibility: (visible: boolean) => dispatch({ type: AppAction.SET_MODAL_VISIBILITY, payload: visible }),

    };
}