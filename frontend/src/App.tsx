import { Suspense, type FC } from "react";
import { useRoutes } from "react-router";

import { routes } from "./routes";

const App: FC = () => {
  const routing = useRoutes(routes);

  return (
    <>
      <Suspense fallback={<div>loading</div>}>{routing}</Suspense>
    </>
  );
};

export default App;
