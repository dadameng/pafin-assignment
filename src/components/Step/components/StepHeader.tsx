import { Progress } from 'antd'
import { CaretDown } from '@phosphor-icons/react'
import React from 'react'

export interface StepHeaderProps {
  headTitle: string
  subTitle: string
  headIcon: React.ReactNode
  isCollapsed: boolean
  validTaskCount: number
  totalTaskCount: number
  progress: number
}

const progressInfoSuffix = 'ステップ'

export const StepHeader = ({
  headTitle,
  subTitle,
  headIcon,
  isCollapsed,
  validTaskCount,
  totalTaskCount,
  progress,
}: StepHeaderProps): JSX.Element => {
  const progressInfoString = `${validTaskCount} / ${totalTaskCount} ${progressInfoSuffix}`
  return (
    <>
      <div className="flex items-center gap-2 text-xl">
        {headIcon}
        <div className="flex-grow cus-text-title text-text-main ">
          {headTitle}
        </div>

        <div className="flex items-center w-16">
          <Progress
            strokeColor={'var(--green-500)'}
            showInfo={false}
            percent={progress}
          ></Progress>
        </div>
        <div className="cus-text-content text-sm text-grey-400">
          {progressInfoString}
        </div>
        <CaretDown
          className={`transition-transform duration-300 transform ${
            isCollapsed ? 'rotate-0' : '-rotate-180'
          }`}
          size={16}
          color={'var(--grey-500'}
        ></CaretDown>
      </div>
      <div className="cus-text-content text-base text-text-content mt-4">
        {subTitle}
      </div>
    </>
  )
}
