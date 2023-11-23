export interface SiderButtonProps {
  title: string
  subTitle: string
  onClick: () => void
}

export const SiderButton = ({
  title,
  subTitle,
  onClick,
}: SiderButtonProps): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-2 p-2 md:p-4 bg-white rounded-lg border border-solid border-primary-100 hover:bg-primary-100 hover:text-white active:bg-primary-200 cursor-pointer transition duration-150 ease-in-out"
    >
      <div className="cus-text-title text-text-main text-sm">{title}</div>
      <div className="cus-text-content text-grey-800 text-xs">{subTitle}</div>
    </div>
  )
}
