import { mainTheme } from '@/shared/config/theme'
import ReactSelect from 'react-select'

type SelectProps = {
  $options?: { label: string; value: string }[]
  width?: string
  height?: string
  tabIndex?: number
}

export const Select = (props: SelectProps) => {
  return (
    <ReactSelect
      tabIndex={props.tabIndex}
      options={props.$options}
      defaultValue={props.$options ? props.$options[0] : undefined}
      styles={{
        indicatorSeparator: (baseStyles) => ({
          ...baseStyles,
          display: 'none',
        }),
        option: (baseStyles) => ({
          ...baseStyles,
          fontSize: mainTheme.fontSize.medium,
          fontFamily: mainTheme.fontFamily.inter,
          lineHeight: '24px',
          height: '24px',
          paddingTop: 0,
        }),
        valueContainer: (baseStyles) => ({
          ...baseStyles,
          fontSize: mainTheme.fontSize.medium,
          fontFamily: mainTheme.fontFamily.inter,
        }),
        input: (baseStyles) => ({
          ...baseStyles,
          fontSize: mainTheme.fontSize.medium,
        }),
        control: (baseStyles, state) => ({
          ...baseStyles,
          height: '40px',
          borderColor: state.isFocused ? mainTheme.colors.focusOutlined : 'none',
          borderRadius: '6px',
        }),
        container: (baseStyles) => ({
          ...baseStyles,
          width: props.width ?? 'auto',
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          margin: 0,
          border: `1px solid ${mainTheme.colors.focusOutlined}`,
          borderRadius: '6px',
        }),
      }}
    />
  )
}
