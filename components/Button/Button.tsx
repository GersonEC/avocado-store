interface ButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

const Button = (props: ButtonProps) => {
  return (
    <div className="button">
      <button onClick={props.onClick} disabled={props.disabled}>
        <p>{props.label}</p>
      </button>
    </div>
  )
}

export default Button
