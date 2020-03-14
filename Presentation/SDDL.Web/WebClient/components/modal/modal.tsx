import * as React from 'react';
import { createPortal } from 'react-dom';
import { useModal, modalContext } from './modal-hooks';

export const Modal = ({ children }: React.PropsWithChildren<{}>) => {

    const { setVisibility } = useModal();
    const { node } = React.useContext(modalContext);

    React.useEffect(() => {
        setVisibility(true);

        return () => setVisibility(false);
    }, []);

    return node ? createPortal(children, node) : null;
}