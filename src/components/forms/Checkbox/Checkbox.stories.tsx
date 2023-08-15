import React from 'react'
import { Checkbox } from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Checkbox component

Source: https://designsystem.digital.gov/components/checkbox
`,
      },
    },
  },
}

export const defaultCheckbox = (): JSX.Element => (
  <Checkbox id="checkbox" name="checkbox" label="My Checkbox" />
)

export const checked = (): JSX.Element => (
  <Checkbox id="checkbox" name="checkbox" label="My Checkbox" defaultChecked />
)

export const disabled = (): JSX.Element => (
  <Checkbox id="checkbox" name="checkbox" label="My Checkbox" disabled />
)

export const withRichLabel = (): JSX.Element => (
  <Checkbox
    id="checkbox"
    name="checkbox"
    label={<strong>My Checkbox</strong>}
  />
)

export const WithLabelDescription = (): JSX.Element => (
  <Checkbox
    id="checkbox"
    name="checkbox"
    label="My Checkbox"
    labelDescription="This is optional text that can be used to describe the label in more detail."
  />
)

export const tile = (): JSX.Element => (
  <Checkbox id="checkbox" name="checkbox" label="My Checkbox" tile />
)

export const tileWithLabelDescription = (): JSX.Element => (
  <Checkbox
    id="checkbox"
    name="checkbox"
    label="My Checkbox"
    labelDescription="This is optional text that can be used to describe the label in more detail."
    tile
  />
)
