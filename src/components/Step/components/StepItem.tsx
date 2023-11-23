import React, {
  useCallback,
  useContext,
  useRef,
  useEffect,
  useState,
} from 'react'
import { Button, ConfigProvider } from 'antd'
import {
  CircleDashed,
  ArrowRight,
  Info,
  CheckCircle,
} from '@phosphor-icons/react'
import type { StepVerificationType } from '../types'
import classNames from 'classnames'
import { StepsContext } from '../StepsContext'

export interface StepItemProps {
  enableEdit: boolean
  bizData: StepVerificationType
}

export const StepItem = ({
  bizData,
  enableEdit,
}: StepItemProps): JSX.Element => {
  const {
    itemTitle,
    verficationDesc,
    alertContent,
    validationContent,
    stepIndex,
    itemIndex,
  } = bizData
  const valid = validationContent?.length > 0
  const validationContentRef = useRef(validationContent ?? [])
  validationContentRef.current = validationContent ?? []

  const context = useContext(StepsContext)

  const handleSelect = useCallback(() => {
    if (!enableEdit) {
      return
    }
    context?.handleClickTask(bizData)
  }, [bizData, context, enableEdit])

  const showSelectBorder =
    context?.stepsProgressResult[stepIndex].currentProcessIndex == itemIndex &&
    enableEdit

  const [showElements, setShowElements] = useState(
    validationContentRef.current.length > 0,
  )

  useEffect(() => {
    if (validationContentRef.current.length > 0) {
      setShowElements(true)
    } else {
      setTimeout(() => setShowElements(false), 300)
    }
  }, [validationContentRef.current.length])

  return (
    <div
      className={classNames(
        'flex items-center justify-between p-4 rounded-2xl border border-solid',
        {
          'border-neutral-500': !showSelectBorder,
          'border-primary-500': showSelectBorder,
        },
      )}
    >
      <div className="gap-2 self-stretch flex items-start flex-col flex-1 grow mr-2 md:mr-10">
        <div
          className={classNames('flex items-center w-full gap-2', {
            'opacity-40': !enableEdit,
            'opacity-100': enableEdit,
          })}
        >
          {valid ? (
            <CheckCircle size={24} color="var(--green-500)"></CheckCircle>
          ) : (
            <CircleDashed size={24} color="#A7AEB4"></CircleDashed>
          )}

          <div className="flex-1 cus-text-title text-text-main text-base">
            {itemTitle}
          </div>
        </div>
        <div className="pl-8 gap-2 flex flex-col">
          <div
            className={classNames(
              'flex flex-wrap transition-opacity duration-300',
              {
                'opacity-0': !showElements,
                'opacity-100': showElements,
              },
            )}
          >
            {showElements &&
              validationContentRef.current.map(element => (
                <div
                  key={element}
                  className={classNames(
                    'bg-info-50 px-2 rounded text-info-600',
                    {
                      'opacity-40': !enableEdit,
                      'opacity-100': enableEdit,
                    },
                  )}
                >
                  {element}
                </div>
              ))}
          </div>

          <div
            className={classNames(
              'flex-1 text-text-content cus-text-content text-sm',
              { 'opacity-40': !enableEdit, 'opacity-100': enableEdit },
            )}
          >
            {verficationDesc}
          </div>
          {alertContent && (
            <div className="flex items-center gap-1">
              <Info size={16} color="#276EF1"></Info>
              <div className="text-xs text-text-content cus-text-content">
                {alertContent}
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className={classNames({
          'opacity-40': !enableEdit,
          'opacity-100': enableEdit,
        })}
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#4299E1',
            },
          }}
        >
          <Button type="primary" onClick={handleSelect}>
            <div className="flex items-center">
              選択する
              <ArrowRight></ArrowRight>
            </div>
          </Button>
        </ConfigProvider>
      </div>
    </div>
  )
}
