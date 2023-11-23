import { useCallback } from 'react'
import { SiderButton } from '@/components/Sider/SiderButton'

export type SideBarChildProps = {
  title: string
  subTitle: string
}

export type SideBarProps = {
  title: string
  buttons: SideBarChildProps[]
  onClickButton: (btnIndex: number) => void
}

export const SiderBar = ({
  title,
  buttons,
  onClickButton,
}: SideBarProps): JSX.Element => {
  const handleClick = useCallback(
    (index: number) => {
      onClickButton(index)
    },
    [onClickButton],
  )

  return (
    <div className="w-48 flex flex-col gap-3 ml-4">
      <div>{title}</div>
      {buttons.map((button, index) => {
        return (
          <SiderButton
            title={button.title}
            subTitle={button.subTitle}
            onClick={() => {
              handleClick(index)
            }}
          />
        )
      })}
    </div>
  )
}
