/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--padding": 0
  },
  medium: {
    "--height": 12 + "px",
    "--padding": 0
  },
  large: {
    "--height": 24 + "px",
    "--padding": 4 + "px"
  }
};

const OuterBar = styled.div`

  border-radius: 4px;
  
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 100%;
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
  `;

const InnerBarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`

const InnerBar = styled.div`
  border-radius: 4px 0 0 4px;
  width: ${p => p.value}%;
  background-color: ${COLORS.primary};
  height: var(--height);
  display: block;
`

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <OuterBar size={size} style={styles} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <InnerBarWrapper><InnerBar value={value} /></InnerBarWrapper>
    </OuterBar>
  )
};

export default ProgressBar;
