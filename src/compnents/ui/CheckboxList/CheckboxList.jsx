import Li from "../../styled/li/li"
import { Checkbox } from "../Checkbox/Checkbox"
import { CheckboxesUl } from "./styles"

export const CheckboxList = ({
  selectValues, // selected values arr
  labelComponent, 
  options, //{title: заголовок, value: значение}
  name, 
  onChange,
  onClickLabel = () => {}
}) => {

  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue)
  }

  return (
    <CheckboxesUl>
      {options?.map((option, index) => {
        return (
          <Li key={option.value}>
            <Checkbox 
              labelComponent={labelComponent}
              selectValues={selectValues}
              isChecked={selectValues.includes(option.value)}
              name={name}
              value={option.value}
              text={option.title}
              onClick={value => onClickLabel(value, index)}
              onChange={handleChange}
            />
          </Li>
        )
      })}
    </CheckboxesUl>
  )
}