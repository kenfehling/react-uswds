import React from 'react'
import { StepIndicatorStep } from '../StepIndicatorStep/StepIndicatorStep'
import { StepIndicator } from '../StepIndicator/StepIndicator'

export default {
  title: 'Components/Step Indicator',
  component: StepIndicator,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Step Indicator component

Source: https://designsystem.digital.gov/components/step-indicator/

Updates users on their progress through a multi-step process.
    `,
      },
    },
  },
}

export const defaultStepIndicator = (): JSX.Element => (
  <StepIndicator headingLevel="h4">
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const noLabels = (): JSX.Element => (
  <StepIndicator showLabels={false} headingLevel="h4">
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const centered = (): JSX.Element => (
  <StepIndicator centered headingLevel="h4">
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const counters = (): JSX.Element => (
  <StepIndicator counters="default" headingLevel="h4">
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const smallCounters = (): JSX.Element => (
  <StepIndicator counters="small" headingLevel="h4">
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const differentHeadingLevel = (): JSX.Element => (
  <StepIndicator headingLevel="h2">
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)
