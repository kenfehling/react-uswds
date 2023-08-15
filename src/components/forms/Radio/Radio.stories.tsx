import React from 'react'
import { Radio } from './Radio'

export default {
  title: 'Components/Radio buttons',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Radio component

Source: https://designsystem.digital.gov/components/radio-buttons
`,
      },
    },
  },
}

export const defaultRadio = (): JSX.Element => (
  <Radio id="input-radio" name="input-radio" label="My Radio Button" />
)

export const selected = (): JSX.Element => (
  <Radio
    id="input-radio"
    name="input-radio"
    label="My Radio Button"
    defaultChecked
  />
)

export const disabled = (): JSX.Element => (
  <Radio id="input-radio" name="input-radio" label="My Radio Button" disabled />
)

export const WithLabelDescription = (): JSX.Element => (
  <Radio
    id="input-radio"
    name="input-radio"
    label="My Radio Button"
    labelDescription="This is optional text that can be used to describe the label in more detail."
  />
)

export const tile = (): JSX.Element => (
  <Radio id="input-radio" name="input-radio" label="My Radio Button" tile />
)

export const tileWithLabelDescription = (): JSX.Element => (
  <Radio
    id="input-radio"
    name="input-radio"
    label="My Radio Button"
    labelDescription="This is optional text that can be used to describe the label in more detail."
    tile
  />
)
