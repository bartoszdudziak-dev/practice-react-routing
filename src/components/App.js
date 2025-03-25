import React, { createContext, useEffect, useRef } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Task01 from "./../../01/Task01";
import Task02 from "./../../02/Task02";
import Task03 from "./../../03/Task03";
import Task04 from "./../../04/Task04";
import Task05 from "./../../05/Task05";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const URLContext = createContext();
const URLProvider = ({ children }) => {
  const { pathname } = useLocation();
  const previousUrlRef = useRef(null);

  useEffect(() => {
    previousUrlRef.current = pathname;
  }, [pathname]);

  return (
    <URLContext.Provider value={{ previousUrl: previousUrlRef.current }}>
      {children}
    </URLContext.Provider>
  );
};

const App = () => {
  const routes = [
    { url: "/task01", text: "01" },
    { url: "/task02", text: "02" },
    { url: "/task03", text: "03" },
    { url: "/task04", text: "04" },
    { url: "/task05", text: "05" },
  ];
  return (
    <Router>
      <URLProvider>
        <nav>
          <ul>
            {routes.map((item) => (
              <li key={item.url}>
                <Link to={item.url}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Switch>
          <Route path="/task01" component={Task01} />
          <Route path="/task02" exact component={Task02} />
          <Route path="/task02/product-:id" component={Task02} />
          <Route path="/task03" exact component={Task03} />
          <Route path="/task03/:category" component={Task03} />
          <Route path="/task04" exact component={Task04} />
          <Route path="/task04/:sortBy" component={Task04} />
          <Route path="/task05" exact component={Task05} />
          <Route path="/task05/:filters" component={Task05} />
        </Switch>
      </URLProvider>
    </Router>
  );
};

export default App;
