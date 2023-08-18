import { SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Scrollbar } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import { Button } from "../../ui/Button/Button";
import { Panel } from "../../ui/Panel/Panel";
import { TextInput } from "../../ui/TextInput/TextInput";
import { Title, TitleLevel, TitleSize } from "../../ui/Title/Title";
import { Form, LeftColumn, OrderContainer, PriceLabel, PriceValue, ProductsSwiper, RightColumn } from "./styles";
import { ProductCard } from "../../ui/ProductCard/ProductCard";


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
            <ProductsSwiper
              modules={[Pagination, Mousewheel, Scrollbar]}
              spaceBetween={12}
              direction="vertical"
              slidesPerView="auto"
              scrollbar={{ draggable: true }}
              mousewheel
              pagination={{ type: 'fraction'}}
            >
              {
                products?.map((product) => {
                  return (
                    <SwiperSlide key={product.id}>
                      <ProductCard product={product} />
                    </SwiperSlide>
                  )
                })
              }
            </ProductsSwiper>
          </RightColumn>
        </Form>
      </OrderContainer>
    </main>
  )
}