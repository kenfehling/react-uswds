import React from 'react'
import { DateInput } from './DateInput'
import { DateInputGroup } from '../DateInputGroup/DateInputGroup'
import { Fieldset } from '../Fieldset/Fieldset'

export default {
  title: 'Components/Date input',
  component: DateInput,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 DateInput component

Source: https://designsystem.digital.gov/components/text-input/
`,
      },
    },
  },
}

export const monthDateInput = (): JSX.Element => (
  <DateInput
    id="testDateInput"
    name="testName"
    label="Month"
    unit="month"
    maxLength={2}
    minLength={2}
  />
)

export const dayDateInput = (): JSX.Element => (
  <DateInput
    id="testDateInput"
    name="testName"
    label="Day"
    unit="day"
    maxLength={2}
    minLength={1}
  />
)

export const yearDateInput = (): JSX.Element => (
  <DateInput
    id="testDateInput"
    name="testName"
    label="Year"
    unit="year"
    maxLength={4}
    minLength={4}
  />
)

export const dateOfBirthExample = (): JSX.Element => (
  <Fieldset legend="Date of birth">
    <span className="usa-hint" id="dateOfBirthHint">
      For example: 4 28 1986
    </span>
    <DateInputGroup>
      <DateInput
        id="testDateInput"
        name="testName"
        label="Month"
        unit="month"
        maxLength={2}
        minLength={2}
      />
      <DateInput
        id="testDateInput"
        name="testName"
        label="Day"
        unit="day"
        maxLength={2}
        minLength={2}
      />
      <DateInput
        id="testDateInput"
        name="testName"
        label="Year"
        unit="year"
        maxLength={4}
        minLength={4}
      />
    </DateInputGroup>
  </Fieldset>
)
