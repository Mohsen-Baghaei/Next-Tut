export type RouteHandlerType = {
  href: string;
  name: string;
};

export const routeHandler: RouteHandlerType[] = [
  {
    href: "/routeHandler/dashboard",
    name: "dashbard/Route Handle",
  },
  {
    href: "/routeHandler/dashboard/users",
    name: "dashbard/Nested Route Handle",
  },
  {
    href: "/routeHandler/comments",
    name: "comments/ ( GET / Post )",
  },
  {
    href: "/routeHandler/comments/2",
    name: "comments/ ( GET / PATCH / DELETE With Id )",
  },
  {
    href: "/routeHandler/comments/?query=first",
    name: "comments/ Search Filter",
  },
  {
    href: "/routeHandler/profile/api",
    name: "profile/ Headers / Cookies",
  },
  {
    href: "/routeHandler/api/users/v1",
    name: "api/ Redirect",
  },
  {
    href: "/routeHandler/categories",
    name: "categories/ Cashing",
  },
];
