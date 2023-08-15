import React from 'react'
import classnames from 'classnames'

type ProcessListProps = {
  className?: string
  children: JSX.Element[]
}

export const ProcessList = ({
  className,
  children,
  ...listProps
}: ProcessListProps & JSX.IntrinsicElements['ol']): JSX.Element => {
  const classes = classnames('usa-process-list', className)
  return (
    <ol className={classes} {...listProps}>
      {children}
    </ol>
  )
}

export default ProcessList
