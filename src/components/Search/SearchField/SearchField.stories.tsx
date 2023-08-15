import React from 'react'
import { SearchField } from './SearchField'

export default {
  title: 'Components/Search/SearchField',
  component: SearchField,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Search Field component

Source: https://designsystem.digital.gov/components/search/
`,
      },
    },
  },
}

export const defaultSearchField = (): JSX.Element => (
  <SearchField placeholder="Search..." />
)

export const bigSearchField = (): JSX.Element => (
  <SearchField placeholder="Type something here..." isBig />
)
