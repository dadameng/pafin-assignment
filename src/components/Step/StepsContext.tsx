import React from 'react'
import { useSteps } from './hooks'

export type UseStepsReturnType = ReturnType<typeof useSteps>

export const StepsContext = React.createContext<UseStepsReturnType | undefined>(
  undefined,
)
