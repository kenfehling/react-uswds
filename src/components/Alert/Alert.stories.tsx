import React from 'react'
import { Alert } from './Alert'

import { Button } from '../Button/Button'

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Alert component

Source: https://designsystem.digital.gov/components/alert/
`,
      },
    },
  },
}

const testText = (
  <>
    Lorem ipsum dolor sit amet, <a href="#test">consectetur adipiscing</a> elit,
    sed do eiusmod.
  </>
)

export const success = (): JSX.Element => (
  <Alert type="success" heading="Success status" headingLevel="h4">
    {testText}
  </Alert>
)

export const warning = (): JSX.Element => (
  <Alert type="warning" heading="Warning status" headingLevel="h4">
    {testText}
  </Alert>
)

export const error = (): JSX.Element => (
  <Alert type="error" heading="Error status" headingLevel="h4">
    {testText}
  </Alert>
)

export const info = (): JSX.Element => (
  <Alert type="info" heading="Informative status" headingLevel="h4">
    {testText}
  </Alert>
)

export const slim = (): JSX.Element => (
  <>
    <Alert type="success" headingLevel="h4" slim>
      {testText}
    </Alert>
    <Alert type="warning" headingLevel="h4" slim>
      {testText}
    </Alert>
    <Alert type="error" headingLevel="h4" slim>
      {testText}
    </Alert>
    <Alert type="info" headingLevel="h4" slim>
      {testText}
    </Alert>
  </>
)

export const noIcon = (): JSX.Element => (
  <>
    <Alert type="success" headingLevel="h4" noIcon>
      {testText}
    </Alert>
    <Alert type="warning" headingLevel="h4" noIcon>
      {testText}
    </Alert>
    <Alert type="error" headingLevel="h4" noIcon>
      {testText}
    </Alert>
    <Alert type="info" headingLevel="h4" noIcon>
      {testText}
    </Alert>
  </>
)

export const slimNoIcon = (): JSX.Element => (
  <>
    <Alert type="success" headingLevel="h4" slim noIcon>
      {testText}
    </Alert>
    <Alert type="warning" headingLevel="h4" slim noIcon>
      {testText}
    </Alert>
    <Alert type="error" headingLevel="h4" slim noIcon>
      {testText}
    </Alert>
    <Alert type="info" headingLevel="h4" slim noIcon>
      {testText}
    </Alert>
  </>
)

export const headingLevels = (): JSX.Element => (
  <>
    <h1>Heading Level 1</h1>
    <Alert type="info" heading="Heading level 2" headingLevel="h2">
      {testText}
    </Alert>
  </>
)
export const withCTA = (): JSX.Element => (
  <Alert
    type="warning"
    heading="Warning status"
    headingLevel="h4"
    cta={
      <Button type="button" outline>
        Click here
      </Button>
    }>
    {testText}
  </Alert>
)

export const withValidation = (): JSX.Element => (
  <Alert type="info" heading="Code requirements" headingLevel="h4" validation>
    <ul>
      <li>Use at least one uppercase character</li>
      <li>Use at least one number</li>
    </ul>
  </Alert>
)
