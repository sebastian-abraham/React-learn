interface Props {
  children: string;
  color?: string;
  OnClick: () => void;
}

const Button = ({ children, OnClick, color = "primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={OnClick}>
      {children}
    </button>
  );
};

export default Button;
