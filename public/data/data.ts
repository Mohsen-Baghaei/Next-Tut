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
];
