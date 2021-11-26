import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
// import Button from './Button';

import { ReactComponent as CloseIcon } from '../assets/images/common/icon-close.svg';

interface IModalProps {
  title?: string;
  children?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: any;
  onCancel?: any;
  onClose?: any;
  confirmColor?: string;
  cancelColor?: string;
  visible: boolean;
  hideXButton?: boolean;
}

interface IDarkBackgroundProps {
  firstRendering: boolean;
  disappear: boolean;
}

interface IModalContainer {
  disappear: boolean;
}

const Modal = ({
  title,
  children,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  onClose,
  confirmColor,
  cancelColor,
  visible,
  hideXButton,
}: IModalProps) => {
  const [firstRendering, setFirstRendering] = useState(true);

  useEffect(() => {
    if (visible) {
      setFirstRendering(firstRendering => firstRendering && false);
    }
  }, [visible]);

  return (
    <DarkBackground
      firstRendering={firstRendering}
      disappear={!visible}
      onClick={e => {
        if (visible && onClose) {
          e.preventDefault();
          onClose(e);
        } else {
          return undefined;
        }
      }}
    >
      <ModalContainer disappear={!visible} onClick={e => e.stopPropagation()}>
        {(title || !hideXButton) && (
          <div className="header">
            <span className="title">{title}</span>
            {!hideXButton && (
              <button className="close-btn" onClick={e => onClose(e)}>
                <CloseIcon />
              </button>
            )}
          </div>
        )}
        <div className="body">{children}</div>
        <div className="footer">
          <ButtonGroup>
            {onCancel && (
              <button
                className={`cancel-button common-button ${cancelColor} small`}
                style={{ color: '#666666', background: '#F3F3F3' }}
                onClick={onCancel}
              >
                {cancelText}
              </button>
            )}
            {onConfirm && (
              <button className={`confirm-button common-button ${confirmColor} small`} onClick={onConfirm}>
                {confirmText}
              </button>
            )}
          </ButtonGroup>
        </div>
      </ModalContainer>
    </DarkBackground>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; z-index: 9999}
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; z-index: -1}
`;

const slideUp = keyframes`
  from { transform: translateY(12.5rem); }
  to { transform: translateY(0); }
`;

const slideDown = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(12.5rem); }
`;

const DarkBackground = styled('div')<IDarkBackgroundProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  ${({ firstRendering, disappear }) =>
    firstRendering
      ? css`
          opacity: 0;
          z-index: -1;
        `
      : css`
          animation-duration: 0.25s;
          animation-timing-function: ease-out;
          animation-name: ${fadeIn};
          animation-fill-mode: forwards;
          animation-name: ${disappear && fadeOut};
        `}
`;

const ModalContainer = styled('div')<IModalContainer>`
  width: 100%;
  padding: 0.9375rem;
  background: white;
  border-radius: 0.625rem;
  color: #333333;
  overflow-y: overlay;
  .header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 1.125rem;
  }
  .title {
    margin: 0;
    font-size: 1.125rem;
  }
  .close-btn {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: none;
  }
  .body {
    font-weight: 500;
    font-size: 0.9375rem;
    color: #000000;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
  ${props =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  .cancel-button {
    flex: 1;
    font-size: 0.9375rem;
    font-weight: 500;
  }
  .confirm-button {
    font-size: 0.9375rem;
    font-weight: 500;
    flex: 1;
  }
`;

Modal.defaultProps = {
  confirmText: '확인',
  cancelText: '취소',
  confirmColor: 'select',
  cancelColor: 'unselect',
};

export default Modal;
