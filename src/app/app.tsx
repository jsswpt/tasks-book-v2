import { withProviders } from "./providers/with-providers";

import "./index.scss";
import { Routing } from "pages";

export const App = withProviders(() => {
  return <Routing />;
});
