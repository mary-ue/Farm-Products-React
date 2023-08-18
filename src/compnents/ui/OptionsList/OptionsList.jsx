import Ul from "../../styled/ul/ul";
import { Option, Property } from "./styled";

export const OptionsList = ({ list = [], delimeter = ": "}) => {
  return (
    <Ul>
      {list.map((option, index) => {
        return (
          <Option key={`option${index * 10}`}>
            <Property>
              {option.property}
              {delimeter}
            </Property>
            {option.value}
          </Option>
        )
      })}
    </Ul>
  )
}