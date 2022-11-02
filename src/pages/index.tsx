import { useRoutes } from "react-router-dom";
import { privateRoutesConfig } from "./routes-config";

export const Routing = () => {
  const privateRoutes = useRoutes(privateRoutesConfig);
  return privateRoutes;
};
