import React from 'react'
import { Search } from './Search'

export default {
  title: 'Components/Search/Search',
  component: Search,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Search component

Source: https://designsystem.digital.gov/components/search/
`,
      },
    },
  },
}

const mockSubmit = (): void => {
  /* mock submit fn */
}

const sampleLocalization = {
  buttonText: 'Buscar',
}

export const defaultSearch = (): JSX.Element => (
  <Search onSubmit={mockSubmit} />
)

export const bigSearch = (): JSX.Element => (
  <Search size="big" onSubmit={mockSubmit} />
)

export const smallSearch = (): JSX.Element => (
  <Search
    placeholder="(Optional) Placeholder Text"
    size="small"
    onSubmit={mockSubmit}
  />
)

export const defaultSpanishSearch = (): JSX.Element => (
  <Search onSubmit={mockSubmit} i18n={sampleLocalization} />
)

export const bigSpanishSearch = (): JSX.Element => (
  <Search size="big" onSubmit={mockSubmit} i18n={sampleLocalization} />
)

export const smallSpanishSearch = (): JSX.Element => (
  <Search
    placeholder="(Optional) Spanish Placeholder Text"
    size="small"
    onSubmit={mockSubmit}
    i18n={sampleLocalization}
  />
)
