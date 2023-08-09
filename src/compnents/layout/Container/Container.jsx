import cn from 'classnames';

export const Container = ({className, children}) => {
  return (
    <div className={cn('container', className)}>{children}</div>
  )
}