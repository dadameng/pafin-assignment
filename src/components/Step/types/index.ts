export type StepVerificationType = {
  stepIndex: number
  itemTitle: string
  itemIndex: number
  verficationDesc: string
  alertContent?: string
  validationContent: string[]
}

export type StepType = {
  stepIndex: number
  stepTitle: string
  stepDesc: string
  validations: StepVerificationType[]
  defaultCollapse: boolean
  headIcon: React.ReactNode
}

export type StepProgress = {
  completeCount: number
  totalCount: number
  progress: number
  currentProcessIndex: number
}

export type StepsProgressResult = StepProgress[]

export type StepContainerProps = {
  enableEdit: boolean
  stepData: StepType
}

export type TaskHandler = (
  content: StepVerificationType['validationContent'],
  stepIndex: number,
  itemIndex: number,
) => void

export type TaskClickHandler = (
  taskValue: StepVerificationType,
  updateTask: TaskHandler,
) => void
export type TaskValidationHandler = (taskValue: StepVerificationType) => boolean

export type StepHookProp = {
  initialState: StepType[]
  onClickTask: TaskClickHandler
  onValidationFunc: TaskValidationHandler
}

export type StepsProp = StepHookProp
