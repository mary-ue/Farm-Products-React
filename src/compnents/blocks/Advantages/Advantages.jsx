import { Container } from '../../layout/Container/Container';
import { AdvantageCard } from '../../ui/AdvantageCard/AdvantageCard';
import { Button } from '../../ui/Button/Button';
import { Title } from '../../ui/Title/Title';
import s from './Advantages.module.css';

export const Advantages = ({ advantages }) => {
  return (
    advantages && (
      <section className={s.advantages}>
        <Container className={s.container}>
          <Title className={s.title}>Почему фермерские продукты лучше?</Title>
          <ul className={s.list}>
            {advantages.map((advantage) => {
              return (
                <li className={s.item} key={advantage.id}>
                  <AdvantageCard {...advantage} />
                </li>
              );
            })}
          </ul>
          <Button>Купить</Button>
        </Container>
      </section>
    )
  );
};
