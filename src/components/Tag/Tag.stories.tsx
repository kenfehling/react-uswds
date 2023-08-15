import React from 'react'
import { Tag } from './Tag'

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Tag component

Source: https://designsystem.digital.gov/components/tag/
`,
      },
    },
  },
}

export const defaultTag = (): JSX.Element => <Tag>My Tag</Tag>

export const customBg = (): JSX.Element => (
  <Tag background="#e44608">My Tag</Tag>
)

export const customClass = (): JSX.Element => (
  <Tag className="custom-class">My Tag</Tag>
)
