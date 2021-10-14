interface ButtonProps {
  label: string
  onClick: () => void
}

const Button = (props: ButtonProps) => {
  return (
    <div className="button">
      <button onClick={props.onClick}>
        <p>{props.label}</p>
      </button>
    </div>
  )
}

export default Button
