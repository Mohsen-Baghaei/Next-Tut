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
];
