import React from 'react'
import { SearchButton } from './SearchButton'

export default {
  title: 'Components/Search/SearchButton',
  component: SearchButton,
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

const sampleLocalization = {
  buttonText: 'Buscar',
}

export const defaultSearchButton = (): JSX.Element => <SearchButton />

export const bigSearchButton = (): JSX.Element => (
  <SearchButton size="big" />
)

export const smallSearch = (): JSX.Element => (
  <SearchButton size="small" />
)

export const defaultSpanishSearchButton = (): JSX.Element => (
  <SearchButton i18n={sampleLocalization} />
)

export const bigSpanishSearchButton = (): JSX.Element => (
  <SearchButton size="big" i18n={sampleLocalization} />
)

export const smallSpanishSearch = (): JSX.Element => (
  <SearchButton size="small" i18n={sampleLocalization} />
)
