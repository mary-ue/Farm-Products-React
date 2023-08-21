import { StyledButton } from './styles.js';

export const Button = ({children, minWidth, link, onClick, className, disabled, ...props}) => {

  return (
    <StyledButton 
      className={className}
      $minWidth={minWidth} 
      disabled={disabled}
      {...(link ? { to: link} : { as: "button", onClick, type: "button" })}
      {...props}
    >
      {children}
    </StyledButton>
  )
}