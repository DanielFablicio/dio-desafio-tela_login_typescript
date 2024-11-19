interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
}

export default function Button({ title, onClick }: ButtonProps) {
  return <button onClick={onClick}> {title}</button>;
}
