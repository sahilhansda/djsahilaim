interface Props {
  className?: string
  name: string
}

const Icon = ({ className, name }: Props) => {
  return (
    <>
      {className ? (
        <span className={`material-icons ${className}`}>{name}</span>
      ) : (
        <span className='material-icons'>{name}</span>
      )}
    </>
  )
}

export default Icon
