export type RouteingType = {
  href: string;
  name: string;
};

export const routeing: RouteingType[] = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About/singleRoute",
  },
  {
    href: "/profile",
    name: "Profile/singleRoute",
  },
  {
    href: "/blog",
    name: "Blog/nestedRoute",
  },
  {
    href: "/products",
    name: "Products/dynamicRoute",
  },
  {
    href: "/docs",
    name: "Docs/catch-all-segment",
  },
  {
    href: "/_lib",
    name: "Private Route",
  },
  {
    href: "/this-is-empty",
    name: "General not found page",
  },
  {
    href: "/products/10/1001",
    name: "Specific not found page",
  },
];
