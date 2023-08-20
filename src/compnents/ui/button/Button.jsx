import { StyledButton } from './styles.js';

export const Button = ({children, minWidth, link, onClick, className, disabled, ...props}) => {

  return (
    <StyledButton 
      className={className}
      $minWidth={minWidth} 
      disabled={disabled}
      {...(link ? { href: link} : { as: "button", onClick, type: "button" })}
    >
      {children}
    </StyledButton>
  )
}