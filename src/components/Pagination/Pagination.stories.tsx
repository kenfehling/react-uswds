import React, { useEffect, useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Pagination } from './Pagination'

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    currentPage: { control: 'number' },
    maxSlots: { control: 'number' },
    pathname: { control: 'string' },
    totalPages: { control: 'number' },
  },
} as ComponentMeta<typeof Pagination>

const pathname = '/test-pathname'
const Template: ComponentStory<typeof Pagination> = (args) => {
  const [current, setCurrentPage] = useState<number>(args.currentPage)

  useEffect(() => {
    if (args.totalPages && args.currentPage >= args.totalPages) {
      return
    }
    setCurrentPage(args.currentPage)
  }, [args.currentPage])

  const handleNext = () => {
    const nextPage = current + 1
    setCurrentPage(nextPage)
  }

  const handlePrevious = () => {
    const prevPage = current - 1
    setCurrentPage(prevPage)
  }

  const handlePageNumber = (
    event: React.MouseEvent<HTMLButtonElement>,
    pageNum: number
  ) => {
    setCurrentPage(pageNum)
  }

  return (
    <Pagination
      totalPages={args.totalPages}
      currentPage={current}
      maxSlots={args.maxSlots}
      pathname={args.pathname}
      onClickNext={handleNext}
      onClickPrevious={handlePrevious}
      onClickPageNumber={handlePageNumber}
    />
  )
}

export const Sandbox = Template.bind({})
Sandbox.args = {
  currentPage: 10,
  maxSlots: 7,
}

export const Default = (): JSX.Element => (
  <Pagination pathname={pathname} totalPages={10} currentPage={10} />
)

export const Unbounded = (): JSX.Element => (
  <Pagination pathname={pathname} currentPage={10} />
)

export const ThreePagesFirst = (): JSX.Element => (
  <Pagination pathname={pathname} totalPages={3} currentPage={1} />
)
export const ThreePages = (): JSX.Element => (
  <Pagination pathname={pathname} totalPages={3} currentPage={2} />
)
export const ThreePagesLast = (): JSX.Element => (
  <Pagination pathname={pathname} totalPages={3} currentPage={3} />
)

export const SevenPages = (): JSX.Element => (
  <Pagination pathname={pathname} totalPages={7} currentPage={4} />
)

export const EightPagesFirst = (): JSX.Element => (
  <Pagination pathname={pathname} totalPages={8} currentPage={1} />
)

export const EightPagesFour = (): JSX.Element => (
  <Pagination pathname={pathname} totalPages={8} currentPage={4} />
)

export const EightPagesFive = (): JSX.Element => (
  <Pagination pathname={pathname} totalPages={8} currentPage={5} />
)

export const EightPagesSix = (): JSX.Element => (
  <Pagination pathname={pathname} totalPages={8} currentPage={6} />
)

export const EightPagesLast = (): JSX.Element => (
  <Pagination pathname={pathname} totalPages={8} currentPage={8} />
)

export const NinePagesFive = (): JSX.Element => (
  <Pagination pathname={pathname} totalPages={9} currentPage={5} />
)

export const TenSlots = (): JSX.Element => (
  <Pagination
    pathname={pathname}
    totalPages={24}
    currentPage={10}
    maxSlots={10}
  />
)
