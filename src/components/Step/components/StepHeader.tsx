import React from 'react'
import { Progress } from 'antd'
import { CaretDown } from '@phosphor-icons/react'

export interface StepHeaderProps {
  headTitle: string
  subTitle: string
  headIcon: React.ReactNode
  isCollapsed: boolean
  validTaskCount: number
  totalTaskCount: number
  progress: number
}

export const StepHeader = ({
  headTitle,
  subTitle,
  headIcon,
  isCollapsed,
  validTaskCount,
  totalTaskCount,
  progress,
}: StepHeaderProps): JSX.Element => {
  return (
    <>
      <div className="flex items-center gap-2 text-xl">
        {headIcon}
        <div className="cus-text-title text-text-main flex-grow">
          {headTitle}
        </div>

        <div className="w-16 flex items-center">
          <Progress
            strokeColor={'var(--green-500)'}
            showInfo={false}
            percent={progress}
          ></Progress>
        </div>
        <div className="text-sm cus-text-content font-normal text-grey-400">
          {`${validTaskCount} / ${totalTaskCount} ステップ`}
        </div>
        <CaretDown
          className={`transition-transform duration-300 transform ${
            isCollapsed ? 'rotate-0' : '-rotate-180'
          }`}
          size={16}
          color="#8C959D"
        ></CaretDown>
      </div>
      <div className="text-base text-text-content cus-text-content mt-4">
        {subTitle}
      </div>
    </>
  )
}
