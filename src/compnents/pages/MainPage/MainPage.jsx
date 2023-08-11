import { About } from "../../blocks/About/About"
import { Advantages } from "../../blocks/Advantages/Advantages"


export const MainPage = ({advantages}) => {
  

  return (
    <>
      <About />
      <Advantages advantages={advantages} />
    </>
  )
}