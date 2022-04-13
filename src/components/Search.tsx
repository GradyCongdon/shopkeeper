import { Cross1Icon } from "@radix-ui/react-icons";
import "./Search.scss";

export const Search = () => {
  return (
    <div className="Search">
      <input type="text" placeholder="Search" />
      <button className="remove">
        <Cross1Icon />
      </button>
    </div>
  );
};
