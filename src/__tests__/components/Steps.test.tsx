import React from 'react'
import { render, screen } from '@testing-library/react'
import { Steps } from '@/components/Step'
import '@testing-library/jest-dom'

describe('Steps Component', () => {
  const mockOnClickTask = jest.fn()
  const mockOnValidationFunc = jest.fn().mockReturnValue(false)
  it('renders StepContainer for each step', () => {
    const initialSteps = [
      {
        headIcon: '',
        defaultCollapse: false,
        stepIndex: 0,
        stepTitle: '取引の情報を入力しましょう',
        stepDesc:
          '仮想通貨の損益計算には過去すべての取引履歴が必要になります。',
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
        headIcon: '',
        defaultCollapse: false,
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
        headIcon: '',
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
    render(
      <Steps
        initialState={initialSteps}
        onClickTask={mockOnClickTask}
        onValidationFunc={mockOnValidationFunc}
      />,
    )

    initialSteps.forEach(step => {
      expect(screen.getByText(step.stepTitle)).toBeInTheDocument()
      expect(screen.getByText(step.stepDesc)).toBeInTheDocument()
    })
  })
})
