import { type FC } from "react";
import { useRoutes } from "react-router";

import { routes } from "./routes";
import Header from "./components/Header";

const App: FC = () => {
  const routing = useRoutes(routes);

  return (
    <>
      <Header />
      {routing}
    </>
  );
};

export default App;
