import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const NativeSelect = styled.select`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`

const DisplayedValue = styled.div`
  display: flex;
  align-items: center;
    font-size: 1rem;
    background-color: ${COLORS.transparentGray15};
  margin-right: 8px;
  padding: 12px;
  color: ${COLORS.gray700};
  border: 1px solid ${COLORS.gray700};
  border-radius: 8px;
  
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const StyledIcon = styled(Icon)`
  margin-left: 8px;
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
    <NativeSelect value={value} onChange={onChange}>
      {children}
    </NativeSelect>
    <DisplayedValue>{displayedValue}<StyledIcon size="24" id={'chevron-down'} />
    </DisplayedValue>
    </Wrapper>
  );
};

export default Select;
