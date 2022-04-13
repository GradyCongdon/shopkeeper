import "./Button.scss";

export const Button = ({ children, className }: any) => (
  <button type="button" className={className}>
    {children}
  </button>
);
