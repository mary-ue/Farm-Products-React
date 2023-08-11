import cn from 'classnames';
import s from './Title.module.css';

export const TitleSize = {
  BIG: 'big', 
  SMALL: 'small', 
  DEFAULT: '',
};

export const Title = ({ children, size, className }) => {
  return (
    <h2 className={cn(s.title, size ? s[`title_${size}`] : '', className)}>
      {children}
    </h2>
  );
};