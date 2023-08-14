import { Title, TitleSize } from '../../ui/Title/Title';
import { StyledContainerAbout, StyledSectionAbout, ContentWrapperAbout, TextAbout } from './styles';

export const About = ({ level }) => {
  return (
    <StyledSectionAbout>
      <StyledContainerAbout>
      <ContentWrapperAbout>
        <Title size={TitleSize.BIG} title={level}>
          Магазин фермерских продуктов с&nbsp;доставкой
        </Title>
        <TextAbout>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за&nbsp;день до&nbsp;отправки заказа клиентам. Именно поэтому
          мы&nbsp;принимаем заказы заранее и&nbsp;доставляем продукты
          максимально свежими.
        </TextAbout>
      </ContentWrapperAbout>
      </StyledContainerAbout>
    </StyledSectionAbout>
  )
}