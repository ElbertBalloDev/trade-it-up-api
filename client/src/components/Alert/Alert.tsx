import React from 'react';
import { IAlert } from '../../Context/Context';
import styled, { keyframes } from 'styled-components';

interface IProps {
  alert: IAlert;
  removeMessage: (id: string) => void;
}

interface IToastProps {
  type: string;
}

const SlideIn = keyframes`

`;

const Toast = styled.div<IToastProps>`
  position: fixed;
  font-size: 20px;
  top: 20px;
  right: 0;
  margin-right: 15px;
  width: 200px;
  height: auto;
  min-height: 30px;
  padding: 10px;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: ${(props: IToastProps) =>
    props.type === 'success' ? 'green' : 'red'};
  transition: all 0.5s ease-in;
`;

// need more styling
const CloseButton = styled.div`
  float: right;
  cursor: pointer;
`;

const Alert: React.FC<IProps> = ({ alert, removeMessage }) => {
  return (
    <Toast type={alert.type}>
      <CloseButton onClick={() => removeMessage(alert.id)}>x</CloseButton>
      {alert.message}
    </Toast>
  );
};

export default Alert;
