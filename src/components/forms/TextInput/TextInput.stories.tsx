import React from 'react'
import { TextInput } from './TextInput'

export default {
  title: 'Components/Text input',
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 TextInput component

Source: https://designsystem.digital.gov/components/text-input
`,
      },
    },
  },
}

export const defaultTextInput = (): JSX.Element => (
  <TextInput id="input-type-text" name="input-type-text" type="text" />
)

export const withDefaultValue = (): JSX.Element => (
  <TextInput
    id="input-value"
    name="input-value"
    type="text"
    defaultValue="Change me"
  />
)

export const withPlaceholder = (): JSX.Element => (
  <TextInput
    id="input-placeholder"
    name="input-placeholder"
    type="text"
    placeholder="Enter value"
  />
)

export const error = (): JSX.Element => (
  <TextInput
    id="input-error"
    name="input-error"
    type="text"
    validationStatus="error"
  />
)

export const success = (): JSX.Element => (
  <TextInput
    id="input-success"
    name="input-success"
    type="text"
    validationStatus="success"
  />
)

export const disabled = (): JSX.Element => (
  <TextInput id="input-disabled" name="input-disabled" type="text" disabled />
)

export const readonly = (): JSX.Element => (
  <TextInput id="input-readonly" name="input-readonly" type="text" readOnly />
)

export const password = (): JSX.Element => (
  <TextInput id="input-type-text" name="input-type-text" type="password" />
)
