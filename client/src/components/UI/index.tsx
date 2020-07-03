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

export const Viewport = styled.div`
  max-width: 1300px;
  width: auto;
  height: auto;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-director: row;
	flex-wrap: wrap;
`;

export const RowItem = styled.div`
	flex: 1 1 30%;
	padding: 10px;
	height: 200px;
	border: 1px solid black;
	margin: 10px;
`

export const Column = styled.div`
  display: flex;
  flex-director: column;
  flex-wrap: wrap;
`;

export const Input = styled.input``;

export const Theme: React.FC<IProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
