import { Button } from "../../ui/Button/Button";
import { Panel } from "../../ui/Panel/Panel";
import { TextInput } from "../../ui/TextInput/TextInput";
import { Title, TitleLevel, TitleSize } from "../../ui/Title/Title";
import { Form, LeftColumn, OrderContainer, PriceLabel, PriceValue, RightColumn } from "./styles";

export const Order = ({products}) => {
  // console.log(products)



  return (
    <main>
      <OrderContainer>
        <Form>
          <LeftColumn>
            <Panel marginBottom={18}>
              <Title level={TitleLevel.H2} size={TitleSize.SMALL} marginBottom={12}>
                Выберите продукты
              </Title>
              Checkboxes
            </Panel>
            <Panel>
              <Title level={TitleLevel.H2} size={TitleSize.SMALL} marginBottom={24}>
                Сделать заказ
              </Title>
              <TextInput placeholder="Введите адрес доставки" marginBottom={20} />
              <PriceLabel>Цена</PriceLabel>
              <PriceValue marginBottom={32}>1200</PriceValue>
              <Button>Купить</Button>
            </Panel>
          </LeftColumn>
          <RightColumn>
            Right column content
          </RightColumn>
        </Form>
      </OrderContainer>
    </main>
  )
}