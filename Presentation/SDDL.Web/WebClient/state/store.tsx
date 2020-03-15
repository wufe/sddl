import * as React from 'react';
import { rootReducer, initialGlobalState, rootContext } from './reducer';

export const StoreProvider: React.FunctionComponent = ({children}) => {
    const [state, dispatch] = React.useReducer(rootReducer, initialGlobalState);

    return <rootContext.Provider value={{ state, dispatch }}>
        {(() => {(window as any).state = state})()}
        {children}
    </rootContext.Provider>
}