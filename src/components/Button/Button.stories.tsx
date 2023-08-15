import React from 'react'
import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Button component

Source: https://designsystem.digital.gov/components/button/
`,
      },
    },
  },
}

export const defaultButton = (): JSX.Element => (
  <Button type="button">Click Me</Button>
)

export const secondary = (): JSX.Element => (
  <Button type="button" secondary>
    Click Me
  </Button>
)

export const accentCool = (): JSX.Element => (
  <Button type="button" accentStyle="cool">
    Click Me
  </Button>
)

export const accentWarm = (): JSX.Element => (
  <Button type="button" accentStyle="warm">
    Click Me
  </Button>
)

export const base = (): JSX.Element => (
  <Button type="button" base>
    Click Me
  </Button>
)

export const outline = (): JSX.Element => (
  <Button type="button" outline>
    Click Me
  </Button>
)

export const inverse = (): JSX.Element => (
  <Button type="button" inverse>
    Click Me
  </Button>
)

export const big = (): JSX.Element => (
  <Button type="button" size="big">
    Click Me
  </Button>
)

export const unstyled = (): JSX.Element => (
  <Button type="button" unstyled>
    Click Me
  </Button>
)

export const customClass = (): JSX.Element => (
  <Button type="button" className="custom-class">
    Click Me
  </Button>
)

export const disabled = (): JSX.Element => (
  <Button type="button" disabled>
    Click Me
  </Button>
)
