import styled from 'styled-components';

export const TextInput = styled.input.attrs({
  type: 'text',
})`
  padding: 14px 12px;
  margin-bottom:  ${props => props.$marginBottom || 0}px;
  display: flex;
  height: 48px; 
  width: 100%;
  background-color: ${props => props.theme.colorGray};
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;

  ::placeholder {
    color: ${props => props.theme.colorBlackForText}
  }
`;