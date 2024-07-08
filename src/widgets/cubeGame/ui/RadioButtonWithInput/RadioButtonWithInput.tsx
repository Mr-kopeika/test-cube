import { RadioButton } from '@/shared/ui'
import styled from 'styled-components'

type ComponentProps = {
  id?: string
  label: string
  name?: string
  radioValue: string
  selectValue?: string
  onRadioChange?: React.ChangeEventHandler<HTMLInputElement>
  onSelectChange?: () => void
  width?: string
  currentChecked: string
  selectOptions?: { value: number; label: string }[]
  tabIndex?: number
}

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`

const StyledSelect = styled.select`
  position: absolute;
  right: 16px;
  top: 11px;
  width: 27px;
  height: 22px;
  padding: 0;
  text-align: center;
  border-radius: 6px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.focusOutlined};
  }
`

export const RadioButtonWithInput = (props: ComponentProps) => {
  return (
    <StyledWrapper>
      <RadioButton
        label={props.label}
        id={props.id}
        key={props.id}
        name={props.name}
        $textAlign='left'
        onChange={props.onRadioChange}
        width='100%'
        height='44px'
        value={props.radioValue}
      >
        <StyledSelect
          defaultValue={props.selectOptions ? props.selectOptions[0].value : undefined}
          onChange={props.onSelectChange}
          value={props.selectValue}
          tabIndex={props.tabIndex}
        >
          {props.selectOptions?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      </RadioButton>
    </StyledWrapper>
  )
}
