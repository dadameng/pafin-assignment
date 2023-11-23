import { useCallback, useState } from 'react'

import type {
  StepHookProp,
  StepType,
  TaskHandler,
  StepsProgressResult,
  StepVerificationType,
} from './types'

export const useSteps = (props: StepHookProp) => {
  const { initialState, onClickTask, onValidationFunc } = props
  const [stepValues, setStepValues] = useState<StepType[]>(initialState)
  const [currentStep, setCurrentStep] = useState(0)

  const updateProgressResult = useCallback(
    (values: StepType[]) => {
      return values.map(ele => {
        const totalCount = ele.validations.length
        let currentProcessIndex = -1
        const completeCount = ele.validations.reduce((count, currentValue) => {
          const isValid = onValidationFunc(currentValue)
          if (!isValid && currentProcessIndex === -1) {
            currentProcessIndex = currentValue.itemIndex
          }
          return isValid ? count + 1 : count
        }, 0)
        const progress = (completeCount / totalCount) * 100
        return { completeCount, totalCount, progress, currentProcessIndex }
      })
    },
    [onValidationFunc],
  )
  const [stepsProgressResult, setStepsProgressResult] =
    useState<StepsProgressResult>(updateProgressResult(initialState))

  const updateTask = useCallback<TaskHandler>(
    (content, stepIndex, itemIndex) => {
      const newStep = [...stepValues]
      newStep[stepIndex]['validations'][itemIndex].validationContent = content
      const newStepProgressResult = updateProgressResult(newStep)
      const stepComplete = newStepProgressResult[stepIndex].progress >= 100
      setStepsProgressResult(newStepProgressResult)
      setStepValues(newStep)
      setCurrentStep(stepComplete ? stepIndex + 1 : stepIndex)
    },
    [stepValues, updateProgressResult],
  )

  const handleClickTask = useCallback(
    (taskValue: StepVerificationType) => {
      onClickTask(taskValue, updateTask)
    },
    [onClickTask, updateTask],
  )

  return {
    stepValues,
    stepsProgressResult,
    handleClickTask,
    currentStep,
    updateTask,
  }
}
