import { Panel } from "../Panel/Panel";
import { Title, TitleLevel, TitleSize } from "../Title/Title";
import { CardWrapper, ContentWrapper, Price, ProductImg, StyledProductCard } from "./styles";

export const ProductCard = ({ product }) => {
  console.log(product);
  const { id, description, image, name, price, specifications, structure, weight } = product;



  return (
    <Panel>
      <CardWrapper>
        <ProductImg src={image} alt={name} />
        <ContentWrapper>
        <Title level={TitleLevel.H3} size={TitleSize.MEDIUM}>
          {name}
        </Title>
        <Price>
          {price} руб./ {weight} гр.
        </Price>
      </ContentWrapper>
      </CardWrapper>
    </Panel>
  )
}