import { withProviders } from "./providers/with-providers";

import "./index.scss";
import { Routing } from "pages";
import { Modal } from "shared/ui/modal/modal";

export const App = withProviders(() => {
  return <Routing />;
});
