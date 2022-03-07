interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const Button = (props: Props) => {
  const { onClick, children } = props;

  return (
    <button
      className="uk-button uk-button-link uk-text-primary"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
