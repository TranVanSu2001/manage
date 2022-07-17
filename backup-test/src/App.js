import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";

const App = () => {
  const Test = () => {
    return <div>123</div>;
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            return (
              <Route
                key={index}
                path={route.path}
                element={<Page key={index} />}
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
