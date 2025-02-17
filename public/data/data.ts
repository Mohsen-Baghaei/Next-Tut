export type RouteingType = {
  href: string;
  name: string;
};

export const routeing: RouteingType[] = [
  {
    href: "/",
    name: "home",
  },
  {
    href: "/about",
    name: "about/Single Route",
  },
  {
    href: "/profile",
    name: "profile/Single Route",
  },
  {
    href: "/blog",
    name: "blog/Nested Route",
  },
  {
    href: "/products",
    name: "products/Dynamic Route",
  },
  {
    href: "/docs",
    name: "docs/Catch All Segment",
  },
  {
    href: "/_lib",
    name: "_lib/Private Folder",
  },
  {
    href: "/this-is-empty",
    name: "General not found page",
  },
  {
    href: "/products/10/1001",
    name: "Specific not found page",
  },
  {
    href: "/login",
    name: "Check auth Folder/Routeing Group",
  },
];
