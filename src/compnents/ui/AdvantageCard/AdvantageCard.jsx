import cn from 'classnames';
import s from './AdvantageCard.module.css';
import { Title, TitleSize } from '../Title/Title';

export const AdvantageCard = ({ about, title, owner, isNegative, image }) => {
  // console.log(owner)

  return (
    <article className={cn(s.card, isNegative ? s['card_negative'] : '')}>
      <div className={s.main_content}>
        <img className={s.img} src={image} width={56} height={56} alt={title} />
        <p className={cn(s.owner, isNegative ? s['owner_negative'] : '')}>
          {owner}
        </p>
        <Title className={s.title} size={TitleSize.SMALL}>{title}</Title>
      </div>
      <p className={s.descr} dangerouslySetInnerHTML={{ __html: about }}></p>
    </article>
  );
};
