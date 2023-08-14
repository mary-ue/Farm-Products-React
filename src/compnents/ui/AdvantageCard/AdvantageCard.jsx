import cn from 'classnames';
import s from './AdvantageCard.module.css';
import { Title, TitleSize } from '../Title/Title';
import { TitleLevel } from '../Title/Title';

export const AdvantageCard = ({ about, title, owner, isNegative, image }) => {
  // console.log(owner)

  return (
    <article className={cn(s.card, isNegative ? s['cardNegative'] : '')}>
      <div className={s.mainContent}>
        <img className={s.img} src={image} width={56} height={56} alt={title} />
        <p className={cn(s.owner, isNegative ? s['ownerNegative'] : '')}>
          {owner}
        </p>
        <Title size={TitleSize.SMALL} level={TitleLevel.H3}>
          {title}
        </Title>
      </div>
      <p className={s.descr} dangerouslySetInnerHTML={{ __html: about }}></p>
    </article>
  );
};
