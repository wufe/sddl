import * as React from 'react';
import './modal-wrapper.scss';
import { useModal, modalContext } from './modal-hooks';

export const ModalWrapper = ({ children }: React.PropsWithChildren<{}>) => {
    const modalContainerDomNode: React.RefObject<HTMLDivElement> = React.useRef(null);
    const { visible, setVisibility } = useModal();

    return <modalContext.Provider value={{ node: modalContainerDomNode.current || undefined }}>
        <div className={`modal-wrapper__component ${visible ? '--blurred' : ''}`}>
            {children}
        </div>
        {visible && <div className="modal-wrapper__container" onClick={() => setVisibility(false)}>
            <div className="__modal" ref={modalContainerDomNode} onClick={e => e.stopPropagation()}></div>
        </div>}
    </modalContext.Provider>;
}