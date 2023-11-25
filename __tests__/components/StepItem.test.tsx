import React from 'react'
import { render, screen } from '@testing-library/react'
import { StepItem } from '@/components/Step/components/StepItem'
import '@testing-library/jest-dom'

describe('StepItem Component', () => {
  const clickTestTitle = 'clickTestTitle'
  const clickTestDesc = 'clickTestDesc'

  const mockBizData = {
    stepIndex: 0,
    itemTitle: clickTestTitle,
    itemIndex: 0,
    verficationDesc: clickTestDesc,
    validationContent: [],
  }

  it('renders correctly based on props', () => {
    render(<StepItem bizData={mockBizData} enableEdit={true} />)

    expect(screen.getByText(mockBizData.itemTitle)).toBeInTheDocument()
  })
})
