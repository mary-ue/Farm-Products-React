import { AppRoute } from "../../../const";
import { Button } from "../../ui/Button/Button";

export const Nav = () => {


  return (
    <nav>
      <Button minWidth={260} link={AppRoute.ORDER}>Купить</Button>
    </nav>
  )
}