type Props = {
  text: string;
  onSubmit: () => void;
  primary?: boolean;
};

const Button = ({ text, onSubmit, primary = true }: Props) => (
  <button
    className={`${
      primary
        ? "bg-white text-primary hover:bg-primary hover:text-white"
        : "bg-primary text-white hover:bg-white hover:text-primary"
    } p-4 font-family-button w-fit h-fit
                         border-2 border-white duration-(--transition-duration)
                         cursor-pointer`}
    type="submit"
    onSubmit={onSubmit}
  >
    {text}
  </button>
);

export default Button;
