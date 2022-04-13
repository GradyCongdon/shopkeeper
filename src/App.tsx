import {
  DotsHorizontalIcon,
  HomeIcon,
  TriangleDownIcon,
} from "@radix-ui/react-icons";
import "./reset.css";
import "./root.scss";
import "./App.scss";
import { Nav } from "./components/Nav";
import { Select } from "./components/Select";
import { Button } from "./components/Button";
import { Search } from "./components/Search";
import { Tag } from "./components/Tag";
import { Media } from "./components/Media";

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="Page">
        <header>
          <Select
            icon={<HomeIcon />}
            options={[<option value="Blumen Shop">Blumen Shop</option>]}
            handle={<TriangleDownIcon />}
          />
          <Search />
          <Button>View Carrier Details</Button>
        </header>
        <header>
          <h1>
            Order #5780
            <Tag>Paid</Tag>
          </h1>
          <div>
            <p>April 12 2022 at 10:08 PM</p>
          </div>
        </header>
        <main>
          <div className="Card">
            <header>
              <h2>Customer's Cart</h2>
              <Button>
                <DotsHorizontalIcon className="icon" />
              </Button>
            </header>
            <Media>
              <header>
                <h3>Snake Plant</h3>
                <p>$28.99</p>
              </header>
              <p>Size: Medium</p>
              <p>Color: Light Pink</p>
            </Media>
            <Media>
              <h3>ZZ Plant</h3>
              <p>Size: Small</p>
              <p>Color: Granite</p>
            </Media>
          </div>
        </main>

        <aside>
          <div className="Card">
            <header>
              <h2> Customer </h2>
            </header>
            <div>
              <h3>Shipping Address</h3>
              <p>1823 Wingding St</p>
              <p>Birmingham, IL</p>
              <p>47089</p>
              <p>USA</p>
            </div>
            <hr />
            <div>
              <h3>Billing Address</h3>
              <p>1823 Wingding St</p>
              <p>Birmingham, IL</p>
              <p>47089</p>
              <p>USA</p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
