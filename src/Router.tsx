import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

// interface IRouterProps {
//   toggleDark: () => void;
//   isDark: boolean;
// }

// function Router({ toggleDark, isDark }: IRouterProps) {
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
          {/* <Coin isDark={isDark} /> */}
        </Route>
        <Route path="/">
          <Coins />
          {/* <Coins toggleDark={toggleDark} /> */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
