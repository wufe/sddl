import * as React from 'react';
import { useModal, modalContext } from './modal-hooks';
import { ModalWrapper } from './modal-wrapper';

export const Modal = (props: React.PropsWithChildren<{ name: string }>) => {

    const { name } = useModal();

    if (name !== props.name)
        return null;

    return <ModalWrapper>{props.children}</ModalWrapper>;
}