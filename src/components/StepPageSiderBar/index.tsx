import React from 'react'
import { SiderButton } from '@/components/SiderButton'

export const StepPageSiderBar = (): JSX.Element => {
  return (
    <div className="w-48 flex flex-col gap-3 ml-4">
      <div>クイックアクセス</div>
      <SiderButton
        title={'年度初めの残高入力'}
        subTitle={
          '過去の計算結果を引き継いで計算する場合はこちらをクリックしてください。'
        }
        onClick={() => {}}
      />
      <SiderButton
        title={'帳簿設定'}
        subTitle={
          '計算方法(総平均法、移動平均法)、会計通貨、データ確定に関する設定の変更ができます。'
        }
        onClick={() => {}}
      />
    </div>
  )
}
