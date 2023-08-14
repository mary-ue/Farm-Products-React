import { Li } from '../../styled/index';
import { AdvantageCard } from '../../ui/AdvantageCard/AdvantageCard';
import { Button } from '../../ui/Button/Button';
import { Title } from '../../ui/Title/Title';
import { AdvantagesContainer } from './styles.js';
import { StyledList } from './styles.js';

export const Advantages = ({ advantages }) => {
  return (
    advantages && (
      <section>
        <AdvantagesContainer>
          <Title>Почему фермерские продукты лучше?</Title>
          <StyledList>
            {advantages.map((advantage) => {
              return (
                <Li key={advantage.id}>
                  <AdvantageCard {...advantage} />
                </Li>
              );
            })}
          </StyledList>
          <Button>Купить</Button>
        </AdvantagesContainer>
      </section>
    )
  );
};
