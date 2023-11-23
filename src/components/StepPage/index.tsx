import React, { useCallback } from 'react'
import {
  Steps,
  StepType,
  TaskClickHandler,
  TaskValidationHandler,
} from '@/components/Step'
import { UserCircleGear, Gear, ListChecks } from '@phosphor-icons/react'
import { StepPageSiderBar } from '@/components/StepPageSiderBar'
import { Layout } from 'antd'
import classNames from 'classnames'

export const StepPage = () => {
  const steps: StepType[] = [
    {
      headIcon: (
        <UserCircleGear size={26} color="var(--primary-custom-color)" />
      ),
      stepIndex: 0,
      stepTitle: '取引の情報を入力しましょう',
      stepDesc: '仮想通貨の損益計算には過去すべての取引履歴が必要になります。',
      validations: [
        {
          stepIndex: 0,
          itemTitle: '取引所 / ブロックチェーンを選択しましょう',
          itemIndex: 0,
          verficationDesc:
            '取引をしたことのある取引所 / ブロックチェーンをすべて選択してください。対応していない取引所や取引所外での取引経験がある場合は「カスタム」を選択してください。',
          validationContent: ['13 取引所/ブロックチェーン選択済み'],
        },
        {
          stepIndex: 0,
          itemTitle: '取引履歴を反映させましょう',
          itemIndex: 1,
          verficationDesc:
            'ファイルやAPI連携で履歴を反映させることができます。DeFiの取引はウォレットアドレスを入力することで取引内容まで自動識別することができます。',
          validationContent: [],
        },
      ],
    },
    {
      headIcon: <Gear size={26} color="var(--primary-custom-color)" />,

      stepIndex: 1,
      stepTitle: '足りていない情報を追加しましょう',
      stepDesc:
        '情報が不足していると計算が完了しません。必ず追加してください。',
      validations: [
        {
          stepIndex: 1,
          itemTitle: 'DeFi取引における「要識別」を解消しましょう',
          itemIndex: 0,
          verficationDesc:
            '必要な情報が足りていないため、自動で識別できなかった取引や、DeFi取引以外の入出金取引については、「要識別」として分類されます。このページで取引種類を選択し、計算ができる状態にしてください。',
          alertContent:
            'お客様はDeFi 取引が無い為、完了したものとして認識しました。',
          validationContent: [],
        },
        {
          stepIndex: 1,
          itemTitle: '未分類取引を解消しましょう',
          itemIndex: 1,
          verficationDesc:
            'アップロードされた全ての取引を集計する過程で、クリプタクトが処理出来なかった取引は、「未分類取引」として分類されます。未分類取引は損益計算から除外されるため、ウィザード機能を活用し必ず解消してください。',
          validationContent: [],
        },
      ],
    },
    {
      defaultCollapse: true,
      headIcon: <ListChecks size={26} color="var(--primary-custom-color)" />,
      stepIndex: 2,
      stepTitle: '計算結果を確認しましょう',
      stepDesc:
        '計算結果の最終的なチェックを行って確定申告に必要な情報を確認しましょう。最後にデータをダウンロードできます。',
      validations: [
        {
          stepIndex: 2,
          itemTitle: '計算結果を確認しましょう',
          itemIndex: 0,
          verficationDesc:
            'アップロードされた全ての取引を集計する過程で、クリプタクトが処理出来なかった取引は、「未分類取引」として分類されます。未分類取引は損益計算から除外されるため、ウィザード機能を活用し必ず解消してください。',
          validationContent: [],
        },
      ],
    },
  ]

  const handleClickStep = useCallback<TaskClickHandler>(
    (taskValue, updateTask) => {
      const newContent =
        taskValue.validationContent.length > 0
          ? []
          : ['13 取引所/ブロックチェーン選択済み']
      updateTask(newContent, taskValue.itemIndex, taskValue.stepIndex)
    },
    [],
  )
  const handleValidation = useCallback<TaskValidationHandler>(taskValue => {
    return taskValue.validationContent.length > 0
  }, [])

  return (
    <Layout className="bg-app-bg-primary h-full px-[9vw] py-16">
      <Layout.Header className="bg-app-bg-primary px-0 mb-8">
        <div className="cus-text-title text-text-main text-3xl text-left">
          クリプタクトで計算を始めてみましょう
        </div>
      </Layout.Header>
      <Layout className="bg-app-bg-primary">
        <Layout.Content>
          <Steps
            initialState={steps}
            onClickTask={handleClickStep}
            onValidationFunc={handleValidation}
          />
        </Layout.Content>
        <Layout.Sider
          className={classNames('!bg-app-bg-primary')}
          breakpoint="xs"
          collapsedWidth="0"
          width={180}
        >
          <StepPageSiderBar />
        </Layout.Sider>
      </Layout>
    </Layout>
  )
}
