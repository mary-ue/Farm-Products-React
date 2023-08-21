import { useLocation } from "react-router-dom";
import { AppRoute } from "../../../const";
import { Li, Ul } from "../../styled";
import { Button } from "../../ui/Button/Button";
import { StyledButton } from "./styles";

const links = [
  {
    to: AppRoute.MAIN, 
    item: <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>
  },
  {
    to: AppRoute.ORDER,
    item: <Button minWidth={260} link={AppRoute.ORDER}>Купить</Button>
  }
]

export const Nav = () => {
  const pageUrl = useLocation().pathname;

  return (
    <nav>
      <Ul>
        {links.filter((link => link.to !== pageUrl)).map((link) => {
          return (
            <Li key={link.to}>
              {link.item}
            </Li>
          )
        })}
        <Li></Li>
      </Ul>
    </nav>
  )
}