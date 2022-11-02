import compose from "compose-function";
import { withRouter } from "./with-router";
import { withSidebar } from "./with-sidebar";

export const withProviders = compose(withSidebar, withRouter);
