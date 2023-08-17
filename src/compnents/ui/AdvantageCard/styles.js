import styled from 'styled-components';

export const StyledCard = styled.article`
  padding: 20px;
  height: 100%;
  background-color: ${(props) => {
    let bgColor = '#E1EDCE';
    if (props.$isNegative) {
      bgColor = '#F8DDD7';
    }
    return bgColor
  }};
`;

export const StyledContent = styled.div`
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 56px 1fr;
  grid-template-areas: 'img owner' 'img title';
  column-gap: 20px;
`;

export const StyledImg = styled.img`
  grid-area: img;
`;

export const Owner = styled.p`
  grid-area: owner;
  justify-self: start;
  margin-bottom: 4px;
  padding: 2px 10px;
  font-size: 14px;
  line-height: 1.5;
  color: #fff;
  background-color: ${(props) => {
    let bgColor = '#88AA4D';
    if(props.$isNegative) {
      bgColor = '#F75531'
    }
    return bgColor;
  }};
`;

export const Description = styled.p`
  height: 100%;
`;
