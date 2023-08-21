import { AppRoute } from '../../../const';
import { Li } from '../../styled/index';
import { AdvantageCard } from '../../ui/AdvantageCard/AdvantageCard';
import { Button } from '../../ui/Button/Button';
import { Title } from '../../ui/Title/Title';
import { AdvantagesContainer } from './styles.js';
import { StyledList } from './styles.js';

export const Advantages = ({ advantages, level }) => {
  return (
    advantages && (
      <section>
        <AdvantagesContainer>
          <Title level={level}>Почему фермерские продукты лучше?</Title>
          <StyledList>
            {advantages.map((advantage) => {
              return (
                <Li key={advantage.id}>
                  <AdvantageCard {...advantage} />
                </Li>
              );
            })}
          </StyledList>
          <Button minWidth={260} link={AppRoute.ORDER}>Купить</Button>
        </AdvantagesContainer>
      </section>
    )
  );
};
