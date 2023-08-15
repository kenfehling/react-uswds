import React from 'react'
import { Textarea } from './Textarea'

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Textarea component

Source: https://designsystem.digital.gov/components/text-input
`,
      },
    },
  },
}

export const defaultTextarea = (): JSX.Element => (
  <Textarea id="input-type-text" name="input-type-text" />
)

export const withDefaultValue = (): JSX.Element => (
  <Textarea id="input-value" name="input-value" defaultValue="Change me" />
)

export const withPlaceholder = (): JSX.Element => (
  <Textarea
    id="input-type-text"
    name="input-type-text"
    placeholder="Enter value"
  />
)

export const error = (): JSX.Element => (
  <Textarea id="input-error" name="input-error" error />
)

export const success = (): JSX.Element => (
  <Textarea id="input-success" name="input-success" success />
)

export const disabled = (): JSX.Element => (
  <Textarea id="input-disabled" name="input-disabled" disabled />
)

export const readonly = (): JSX.Element => (
  <Textarea id="input-readonly" name="input-readonly" readOnly />
)
