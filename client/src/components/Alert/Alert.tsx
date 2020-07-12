import React from 'react';
import { IAlert } from '../../Context/Context';
import styled from 'styled-components';

interface IProps {
  alert: IAlert;
}

interface IToastProps {
  type: string;
}

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
  transition: transform 0.5s;
`;

// need more styling
const CloseButton = styled.div`
  float: right;
  cursor: pointer;
`;

const Alert: React.FC<IProps> = ({ alert }) => {
  return (
    <Toast type={alert.type}>
      <CloseButton>x</CloseButton>
      {alert.message}
    </Toast>
  );
};

export default Alert;
