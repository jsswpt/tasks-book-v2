import compose from "compose-function";
import { withModal } from "./with-modal";
import { withRouter } from "./with-router";
import { withSidebar } from "./with-sidebar";

export const withProviders = compose(withSidebar, withModal, withRouter);
