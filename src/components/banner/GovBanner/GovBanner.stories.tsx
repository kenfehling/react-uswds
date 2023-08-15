import React from 'react'
import { GovBanner } from './GovBanner'

export default {
  title: 'Components/Banner',
  component: GovBanner,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Banner component

Source: https://designsystem.digital.gov/components/banner/
`,
      },
    },
  },
}

export const govBannerDefault = (): JSX.Element => (
  <GovBanner aria-label="Official government website" />
)

export const govBannerEnglishDotGov = (): JSX.Element => (
  <GovBanner
    language="english"
    tld=".gov"
    aria-label="Official government website"
  />
)

export const govBannerEnglishDotMil = (): JSX.Element => (
  <GovBanner
    language="english"
    tld=".mil"
    aria-label="Official government website"
  />
)

export const govBannerSpanishDotGov = (): JSX.Element => (
  <GovBanner
    language="spanish"
    tld=".gov"
    aria-label="Official government website"
  />
)

export const govBannerSpanishDotMil = (): JSX.Element => (
  <GovBanner
    language="spanish"
    tld=".mil"
    aria-label="Official government website"
  />
)
