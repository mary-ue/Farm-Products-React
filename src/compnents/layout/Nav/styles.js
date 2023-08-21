import styled from 'styled-components';
import { Button } from '../../ui/Button/Button';

export const StyledButton = styled(Button)`
  position: relative;
  padding: 0;
  padding-top: 21px;
  padding-bottom: 21px;
  width: auto;
  min-width: 0;
  min-height: auto;
  font-size: 18px;
  line-height: 1;
  color: ${props => props.theme.colorBlackForText};
  background-color: ${props => props.theme.colorWhite};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 19px;
    height: 1px;
    background-color: ${props => props.theme.colorBlackForText};
    opacity: 0;
    transition: opacity .2s ease-in;
  }

  &:hover, 
  &:active {
    background-color: ${props => props.theme.colorWhite};

    &::after {
      opacity: 1;
    }
  }

  &:hover {
    box-shadow: none;
  }
`;