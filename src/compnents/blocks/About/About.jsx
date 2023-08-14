import { Title, TitleSize } from '../../ui/Title/Title';
import { StyledContainer, StyledSection, StyledWrapper, StyledText } from './styles';

export const About = ({ level }) => {
  return (
    <StyledSection>
      <StyledContainer>
      <StyledWrapper>
        <Title size={TitleSize.BIG} title={level}>
          Магазин фермерских продуктов с&nbsp;доставкой
        </Title>
        <StyledText>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за&nbsp;день до&nbsp;отправки заказа клиентам. Именно поэтому
          мы&nbsp;принимаем заказы заранее и&nbsp;доставляем продукты
          максимально свежими.
        </StyledText>
      </StyledWrapper>
      </StyledContainer>
    </StyledSection>
  )
}