import * as React from 'react';
import './modal-wrapper.scss';
import { createPortal } from 'react-dom';
import { useModal } from './modal-hooks';

export const ModalWrapper = ({ children }: React.PropsWithChildren<{}>) => {

    const { visible, hide } = useModal();

    return createPortal(<div className={`modal-wrapper__container ${visible ? '--visible' : ''}`} onClick={() => hide()}>
        <div className={`__modal`} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>, document.getElementById('modal-root')!);
}