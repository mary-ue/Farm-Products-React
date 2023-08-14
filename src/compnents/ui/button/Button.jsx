import { StyledButton } from './styles.js';

export const Button = ({children, minWidth, link, className}) => {

  return (
    <StyledButton 
      className={className}
      $minWidth={minWidth} 
      {...(link ? { href: link} : { as: "button", type: "button" })}
    >
      {children}
    </StyledButton>
  )
}