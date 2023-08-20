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
import { CheckboxLabel, Form, LeftColumn, Main, OrderContainer, OrderMain, PriceLabel, PriceValue, ProductsSwiper, RightColumn } from "./styles";
import { ProductCard } from "../../ui/ProductCard/ProductCard";
import { useState } from "react";
import { CheckboxList } from "../../ui/CheckboxList/CheckboxList";


export const Order = ({products}) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);

  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 2)
    }
  }

  return (
    <Main>
      <OrderContainer>
        <Form>
          <LeftColumn>
            <Panel $marginBottom={18}>
              <Title level={TitleLevel.H2} size={TitleSize.SMALL} $marginBottom={12}>
                Выберите продукты
              </Title>
              <CheckboxList 
                labelComponent={CheckboxLabel}
                name={'select-products'}
                options={products.map((product) => ({
                  value: product.id, 
                  title: product.name
                }))}
                selectValues={selectProductIds}
                onChange={setSelectProductIds}
                onClickLabel={handleOnClickProduct}
              />
            </Panel>
            <Panel>
              <Title level={TitleLevel.H2} size={TitleSize.SMALL} $marginBottom={24}>
                Сделать заказ
              </Title>
              <TextInput placeholder="Введите адрес доставки" $marginBottom={20} />
              <PriceLabel>Цена</PriceLabel>
              <PriceValue $marginBottom={32}>1200</PriceValue>
              <Button>Купить</Button>
            </Panel>
          </LeftColumn>
          <RightColumn>
            <ProductsSwiper
              modules={[Pagination, Mousewheel, Scrollbar]}
              onSwiper={setSwiperRef}
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
    </Main>
  )
}