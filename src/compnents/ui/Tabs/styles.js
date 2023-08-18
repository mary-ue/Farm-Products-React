import styled from 'styled-components';
import Ul from '../../styled/ul/ul';
import Li from '../../styled/li/li';

export const Header = styled(Ul)`
  display: flex;
  column-gap: 8px;
  margin-bottom: 17px;
`;

export const TabItem = styled(Li)`
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TabButton = styled.button`
  display: block;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  color: ${(props) => props.$isSelect ? props.theme.colorWhite : props.theme.colorBlackForText};
  background-color: ${(props) => props.$isSelect ? props.theme.colorForGreenLabel : props.theme.colorGray};
  border: 1px solid rgba(0, 0, 0, 0.10);
`;

export const TabContent = styled.div`
  font-size: 14px;
  text-align: left;
  max-height: ${props => props.$maxContentHeight || 'none'};
  overflow-y: overlay;
`;