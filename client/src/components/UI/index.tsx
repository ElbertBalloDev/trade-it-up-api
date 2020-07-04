import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#36313D'
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em'
  }
};

interface IProps {
  children: React.ReactNode;
}

interface IButtonProps {
  color?: string;
  uppercase?: boolean;
}

export const Viewport = styled.div`
	max-width: 1300px;
	min-height: 800px;
  width: auto;
  height: auto;
  margin: 0 auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 0.25rem;
`;

export const Row = styled.div`
  display: flex;
  flex-director: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
`;

export const SlideUp = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.5s;
  overflow: hidden;
  height: 0;
  background: transparent;
  text-align: center;
  font-size: 50px;
`;

export const RowItem = styled.div`
  flex: 0 1 25%;
  border: 1px solid black;
  margin: 10px;
  cursor: pointer;
  height: 300px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:hover {
    ${SlideUp} {
      height: 100%;
    }
  }

  @media (max-width: 600px) {
    flex: 1 1 30%;
    height: 200px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-director: column;
  flex-wrap: wrap;
`;

export const FormDiv = styled.div`
  font: 95% Arial, Helvetica, sans-serif;
  max-width: 400px;
  margin: 5% auto;
  padding: 40px;
  border: 1px solid black;
`;

export const Input = styled.input`
  -webkit-transition: all 0.30s ease-in-out;
  -moz-transition: all 0.30s ease-in-out;
  -ms-transition: all 0.30s ease-in-out;
  -o-transition: all 0.30s ease-in-out;
  outline: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  background: #fff;
  margin-bottom: 4%;
  border: 1px solid #ccc;
  padding: 3%;
  color: #555;
  font: 95% Arial, Helvetica, sans-serif;

&:focus {
  box-shadow: 0 0 5px #2196f3;
  padding: 3%;
  border: 1px solid #2196f3;
}
`;

export const Button = styled.button<IButtonProps>`
  position: relative;
  display: block;
  padding: 0;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: ${(props: IButtonProps) => props.color ?? '#2ecc71'};
  color: #fff;
  transition: background-color 0.3s;
  width: 100px;
  height: 45px;
  font-size: 20px;
  text-transform: ${(props: IButtonProps) =>
    props.uppercase ? 'uppercase' : 'none'};

  &:hover {
    background-color: #27ae60;
    cursor:pointer;
  }

  &:disabled {
    background-color: #9ccdf5;
    cursor: not-allowed;
  }
`;

export const FormButton = styled(Button)`
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  padding: 3%;
  background: #2196f3;
  /* border-bottom: 2px solid #2196f3; */
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;	
  color: #fff;
`;

export const Theme: React.FC<IProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
