import {
  BackpackIcon,
  ChatBubbleIcon,
  Component1Icon,
  FileTextIcon,
  GearIcon,
  MixIcon,
  Pencil2Icon,
  PersonIcon,
  PieChartIcon,
  ViewGridIcon,
} from "@radix-ui/react-icons";
import { Button } from "./Button";
import "./Nav.scss";

export const Nav = () => {
  return (
    <nav className="Nav">
      <Button className="orange first">
        <MixIcon className="icon" />
      </Button>
      <Button>
        <ViewGridIcon className="icon" />
      </Button>
      <Button>
        <FileTextIcon className="icon" />
      </Button>
      <Button>
        <BackpackIcon className="icon" />
      </Button>
      <Button>
        <PersonIcon className="icon" />
      </Button>
      <Button>
        <Pencil2Icon className="icon" />
      </Button>
      <Button>
        <Component1Icon className="icon" />
      </Button>
      <Button>
        <PieChartIcon className="icon" />
      </Button>
      <Button className="end">
        <ChatBubbleIcon className="icon" />
      </Button>
      <Button>
        <GearIcon className="icon" />
      </Button>
    </nav>
  );
};
