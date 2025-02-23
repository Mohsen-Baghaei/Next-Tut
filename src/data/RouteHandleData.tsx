export type RouteHandlerType = {
  href: string;
  name: string;
};

export const routeHandler: RouteHandlerType[] = [
  {
    href: "/dashboard",
    name: "dashbard/Route Handle",
  },
  {
    href: "/dashboard/users",
    name: "dashbard/Nested Route Handle",
  },
  {
    href: "/comments",
    name: "comments/ ( GET / Post )",
  },
  {
    href: "/comments/2",
    name: "comments/ ( GET / PATCH / DELETE With Id )",
  },
  {
    href: "/comments/?query=first",
    name: "comments/ Search Filter",
  },
  {
    href: "/profile/api",
    name: "profile/ Headers / Cookies",
  },
  {
    href: "/api/users/v1",
    name: "api/ Redirect",
  },
  {
    href: "/categories",
    name: "categories/ Cashing",
  },
];
