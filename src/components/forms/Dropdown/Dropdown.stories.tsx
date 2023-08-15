import React from 'react'

import { Dropdown } from './Dropdown'
import { Label } from '../Label/Label'

export default {
  title: 'Components/Dropdown',
  component: 'Dropdown',
  parameters: {
    docs: {
      description: {
        component: `
### Deprecated USWDS 2.x Dropdown component

⚠️ Dropdown is deprecated and will be removed in the future. Please use the Select component instead.

Source: https://designsystem.digital.gov/components/dropdown/
`,
      },
    },
  },
}

export const defaultDropdown = (): JSX.Element => (
  <Dropdown id="input-dropdown" name="input-dropdown">
    <option>- Select - </option>
    <option value="value1">Option A</option>
    <option value="value2">Option B</option>
    <option value="value3">Option C</option>
  </Dropdown>
)

export const withDefaultValue = (): JSX.Element => (
  <Dropdown id="input-dropdown" name="input-dropdown" defaultValue="value2">
    <option>- Select - </option>
    <option value="value1">Option A</option>
    <option value="value2">Option B</option>
    <option value="value3">Option C</option>
  </Dropdown>
)

export const withLabel = (): JSX.Element => (
  <>
    <Label htmlFor="options">Dropdown label</Label>
    <Dropdown id="input-dropdown" name="input-dropdown">
      <option>- Select - </option>
      <option value="value1">Option A</option>
      <option value="value2">Option B</option>
      <option value="value3">Option C</option>
    </Dropdown>
  </>
)

export const disabled = (): JSX.Element => (
  <Dropdown id="input-dropdown" name="input-dropdown" disabled>
    <option>- Select - </option>
    <option value="value1">Option A</option>
    <option value="value2">Option B</option>
    <option value="value3">Option C</option>
  </Dropdown>
)
