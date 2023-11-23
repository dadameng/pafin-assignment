import React from 'react'
import type {
  StepsProp,
  StepContainerProps,
  TaskClickHandler,
  TaskValidationHandler,
  StepType,
  StepVerificationType,
} from './types'
import { useSteps } from './hooks'
import { StepContainer } from './components/StepContainer'
import { StepsContext } from './StepsContext'

export {
  StepContainerProps,
  TaskClickHandler,
  TaskValidationHandler,
  StepType,
  StepVerificationType,
}

export const Steps = (props: StepsProp) => {
  const hookResult = useSteps(props)
  const { currentStep, stepValues } = hookResult

  return (
    <StepsContext.Provider value={hookResult}>
      <div className="flex flex-col flex-1 gap-4 ">
        {stepValues.map(element => {
          return (
            <StepContainer
              key={`uni_${element.stepTitle}_${element.stepIndex}`}
              enableEdit={element.stepIndex <= currentStep}
              stepData={element}
            />
          )
        })}
      </div>
    </StepsContext.Provider>
  )
}
