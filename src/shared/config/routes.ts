const privateRoutes = {
  APP: "/",
  HOME: "home/",
  CATEGORIES: "categories/",
};

const privateRoutesForNavigation = {
  APP: `${privateRoutes.APP}`,
  HOME: `${privateRoutes.APP}${privateRoutes.HOME}`,
  CATEGORIES: `${privateRoutes.APP}${privateRoutes.HOME}${privateRoutes.CATEGORIES}`,
};

export const routes = {
  privateRoutes,
  privateRoutesForNavigation,
};
