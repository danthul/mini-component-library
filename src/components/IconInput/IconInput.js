import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36
  },
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  height: ${p => p.height}px;
`

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: ${p => p.height}px;
`

const StyledInput = styled.input`
  display: block;
  border: none;
  border-bottom: ${p => p.borderThickness}px solid ${COLORS.black};
  height: ${p => p.height}px;
  padding-left: 24px;
  color: ${COLORS.gray700};
  font-size: ${p => p.fontSize}px;
  font-weight: 700;
  outline-offset: 2px;
  width: ${p => p.width}px;
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500}
  }
`

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...props
}) => {
  const styles = SIZES[size]
  return (
    <Wrapper >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper height={styles.iconSize}>
        <StyledIcon size={styles.iconSize} id={icon} ></StyledIcon>
      </IconWrapper>
      <StyledInput {...props} width={width} height={styles.height} borderThickness={styles.borderThickness} fontSize={styles.fontSize} />
    </Wrapper>
  );
};

export default IconInput;
