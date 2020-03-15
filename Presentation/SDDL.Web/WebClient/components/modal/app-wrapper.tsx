import * as React from 'react';
import './app-wrapper.scss';
import { useModal, modalContext } from './modal-hooks';

export const AppWrapper = ({ children }: React.PropsWithChildren<{}>) => {
    const { visible } = useModal();

    return <>
        <div className={`app-wrapper__component ${visible ? '--blurred' : ''}`}>
            {children}
        </div>
    </>;
}