import "./Select.scss";

export const Select = ({ icon, options, handle }: any) => {
  return (
    <span className="Select">
      {icon && <span className="icon">{icon}</span>}
      <select defaultValue={options[0]}>{options}</select>
      {handle && <span className="handle">{handle}</span>}
    </span>
  );
};
