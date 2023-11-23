import { useSteps } from '@/components/Step/hooks'
import { StepVerificationType } from '@/components/Step'
import { renderHook, act } from '@testing-library/react'

describe('useSteps Hook', () => {
  const initialSteps = [
    {
      headIcon: '',
      defaultCollapse: false,
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
  const mockOnClickTask = jest.fn()
  const mockOnValidationFunc = (taskValue: StepVerificationType) => {
    return taskValue.validationContent.length > 0
  }

  it('initializes with the correct state based on initial steps', () => {
    const { result } = renderHook(() =>
      useSteps({
        initialState: initialSteps,
        onClickTask: mockOnClickTask,
        onValidationFunc: mockOnValidationFunc,
      }),
    )

    expect(result.current.stepValues).toEqual(initialSteps)
    expect(result.current.currentStep).toBe(0)
    expect(result.current.stepsProgressResult[0].completeCount).toBe(1)
    expect(result.current.stepsProgressResult[0].progress).toBe(50)
    expect(result.current.stepsProgressResult[0].totalCount).toBe(2)
    expect(result.current.stepsProgressResult[0].currentProcessIndex).toBe(1)
  })

  it('handles task update and click correctly', () => {
    const { result } = renderHook(() =>
      useSteps({
        initialState: initialSteps,
        onClickTask: mockOnClickTask,
        onValidationFunc: mockOnValidationFunc,
      }),
    )
    const newContent = ['new content test']
    act(() => {
      result.current.updateTask(newContent, 0, 1)
    })

    const newValues = [...initialSteps]
    newValues[0]['validations'][1].validationContent = newContent
    expect(result.current.stepValues).toEqual(newValues)
    expect(result.current.stepsProgressResult[0].completeCount).toEqual(2)
    expect(result.current.stepsProgressResult[0].progress).toEqual(100)
    expect(result.current.currentStep).toBe(1)

    act(() => {
      result.current.handleClickTask({
        stepIndex: 2,
        itemTitle: '計算結果を確認しましょう',
        itemIndex: 0,
        verficationDesc:
          'アップロードされた全ての取引を集計する過程で、クリプタクトが処理出来なかった取引は、「未分類取引」として分類されます。未分類取引は損益計算から除外されるため、ウィザード機能を活用し必ず解消してください。',
        validationContent: [],
      })
    })
    expect(mockOnClickTask).toHaveBeenCalled()
  })
})
