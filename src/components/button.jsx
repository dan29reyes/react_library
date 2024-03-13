const Button = ({ text, style, type, func }) => {
    return(
        <button
          className={style}
          type={type}
          onClick={() => func()}
        >
          {text}
        </button>
    )
}

export default Button;