import { OptionsList } from "../OptionsList/OptionsList";
import { Panel } from "../Panel/Panel";
import { Tabs } from "../Tabs/Tabs";
import { Title, TitleLevel, TitleSize } from "../Title/Title";
import { CardWrapper, ContentWrapper, Price, ProductImg, StyledProductCard } from "./styles";

export const ProductCard = ({ product }) => {
  const { id, description, image, name, price, specifications, structure, weight } = product;

  const tabsList = [
    {
      title: "Oписание",
      content: description,
    },
    {
      title: "Характеристики",
      content: <OptionsList list={specifications} />
    },
    {
      title: "Свойства",
      content: <OptionsList list={structure} />
    }
  ];

  return (
    <Panel>
      <CardWrapper>
        <ProductImg src={image} alt={name} />
        <ContentWrapper>
        <Title level={TitleLevel.H3} size={TitleSize.MEDIUM} marginBottom={16}>
          {name}
        </Title>
        <Tabs maxContentHeiht="105px" tabsList={tabsList} />
        <Price>
          {price} руб./ {weight} гр.
        </Price>
      </ContentWrapper>
      </CardWrapper>
    </Panel>
  )
}