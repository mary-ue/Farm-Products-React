import { About } from "../../blocks/About/About"
import { Advantages } from "../../blocks/Advantages/Advantages"
import { TitleLevel } from "../../ui/Title/Title"


export const MainPage = ({advantages}) => {
  return (
    <>
      <About level={TitleLevel.H1} />
      <Advantages advantages={advantages} level={TitleLevel.H2} />
    </>
  )
}