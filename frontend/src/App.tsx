import { Suspense, type FC } from "react";
import { useRoutes } from "react-router";

import { routes } from "./routes";
import Header from "./components/Header";

const App: FC = () => {
  const routing = useRoutes(routes);

  return (
    <>
      <Header />
      <Suspense fallback={<div>loading</div>}>{routing}</Suspense>
    </>
  );
};

export default App;
