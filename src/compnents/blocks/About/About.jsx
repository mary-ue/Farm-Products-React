import { Container } from '../../layout/Container/Container';
import { Title, TitleSize } from '../../ui/Title/Title';
import s from './About.module.css';

export const About = () => {
  return (
    <section className={s.about}>
      <Container className={s.about_container}>
      <div className={s.content_wrapper}>
        <Title size={TitleSize.BIG}>
          Магазин фермерских продуктов с&nbsp;доставкой
        </Title>
        <p className={s.text}>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за&nbsp;день до&nbsp;отправки заказа клиентам. Именно поэтому
          мы&nbsp;принимаем заказы заранее и&nbsp;доставляем продукты
          максимально свежими.
        </p>
      </div>
      </Container>
    </section>
  )
}