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
    href: "/articles/breaking-news-123?lang=en",
    name: "articles/search Params",
  },
  {
    href: "/article/breaking-news-123?lang=en",
    name: "article/search Params (client version)",
  },
  {
    href: "/login",
    name: "Check auth Folder/Routeing Group",
  },
  {
    href: "/order-product",
    name: "order-product/useRouter (use client)",
  },
  {
    href: "/order-redirect",
    name: "order-redirect/redirect",
  },
  {
    href: "/blog",
    name: "loading",
  },
  {
    href: "/dashboard",
    name: "dashboard/Parallel Route (Sub Navigation and default.tsx)/Protactive Route",
  },
  {
    href: "/f1",
    name: "f1/Intercepting Routes",
  },
  {
    href: "/photo-feed",
    name: "photo-feed/Parallel Interception Route",
  },
  {
    href: "/templateUseCase",
    name: "templateUseCase",
  },
];
