import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/core';

const override = css`
  display: block;
  margin: 0 auto;
`;

function Spinner() {
  return (
    <ClipLoader css={override} size={35} color={'#D7369B'} loading={true} />
  );
}

export default Spinner;
