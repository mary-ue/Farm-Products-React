import { Title, TitleSize } from '../Title/Title';
import { TitleLevel } from '../Title/Title';
import { Description, Owner, StyledCard, StyledContent, StyledImg } from './styles';

export const AdvantageCard = ({ about, title, owner, isNegative, image }) => {
  return (
    <StyledCard $isNegative={isNegative}>
      <StyledContent>
        <StyledImg src={image} width={56} height={56} alt={title} />
        <Owner $isNegative={isNegative}>
          {owner}
        </Owner>
        <Title style={{gridArea: 'title'}} size={TitleSize.SMALL} level={TitleLevel.H3}>
          {title}
        </Title>
      </StyledContent>
      <Description dangerouslySetInnerHTML={{ __html: about }}></Description>
    </StyledCard>
  );
};
