import React, { useState, useContext } from 'react'
import { Collapse, CollapseProps, ConfigProvider } from 'antd'
import { StepItem } from './StepItem'
import { StepHeader } from './StepHeader'
import type { StepContainerProps } from '../types'
import { StepsContext } from '../StepsContext'

const CollapseActiveKey = 'CollapseActiveKey'

export const StepContainer = ({
  enableEdit,
  stepData,
}: StepContainerProps): JSX.Element => {
  const context = useContext(StepsContext)
  const {
    validations,
    stepTitle,
    stepDesc,
    defaultCollapse,
    headIcon,
    stepIndex,
  } = stepData
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapse)

  const items: CollapseProps['items'] = [
    {
      key: CollapseActiveKey,
      label: (
        <StepHeader
          isCollapsed={isCollapsed}
          headIcon={headIcon}
          headTitle={stepTitle}
          subTitle={stepDesc}
          validTaskCount={
            context?.stepsProgressResult[stepIndex].completeCount ?? 0
          }
          totalTaskCount={
            context?.stepsProgressResult[stepIndex].totalCount ?? 0
          }
          progress={context?.stepsProgressResult[stepIndex].progress ?? 0}
        />
      ),
      children: (
        <div className="flex flex-col gap-4 pt-4">
          {validations.map((verification, index) => {
            return (
              <StepItem
                key={`uni_item_${verification.itemTitle}_${index}`}
                enableEdit={enableEdit}
                bizData={verification}
              />
            )
          })}
        </div>
      ),
      showArrow: false,
    },
  ]

  return (
    <div className="rounded-lg shadow-container-drop-shadow">
      <ConfigProvider
        theme={{
          components: {
            Collapse: {
              headerBg: 'var(--white-100)',
            },
          },
        }}
      >
        <Collapse
          bordered={false}
          items={items}
          defaultActiveKey={[defaultCollapse ? '' : CollapseActiveKey]}
          showArrow={false}
          onChange={activeKey => {
            let hasValue = false
            if (Array.isArray(activeKey)) {
              hasValue = activeKey.includes(CollapseActiveKey)
            } else {
              hasValue = activeKey === CollapseActiveKey
            }
            setIsCollapsed(!hasValue)
          }}
        />
      </ConfigProvider>
    </div>
  )
}
