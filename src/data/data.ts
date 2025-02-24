export type RouteingType = {
  href: string;
  name: string;
};

export const routeing: RouteingType[] = [
  {
    href: "/route",
    name: "home",
  },
  {
    href: "/route/about",
    name: "about/Single Route",
  },
  {
    href: "/route/profile",
    name: "profile/Single Route",
  },
  {
    href: "/route/blog",
    name: "blog/Nested Route",
  },
  {
    href: "/route/products",
    name: "products/Dynamic Route",
  },
  {
    href: "/route/docs",
    name: "docs/Catch All Segment",
  },
  {
    href: "/route/_lib",
    name: "_lib/Private Folder",
  },
  {
    href: "/route/this-is-empty",
    name: "General not found page",
  },
  {
    href: "/route/products/10/1001",
    name: "Specific not found page",
  },
  {
    href: "/route/articles/breaking-news-123?lang=en",
    name: "articles/search Params",
  },
  {
    href: "/route/article/breaking-news-123?lang=en",
    name: "article/search Params (client version)",
  },
  {
    href: "/route/login",
    name: "Check auth Folder/Routeing Group",
  },
  {
    href: "/route/order-product",
    name: "order-product/useRouter (use client)",
  },
  {
    href: "/route/order-redirect",
    name: "order-redirect/redirect",
  },
  {
    href: "/route/blog",
    name: "loading",
  },
  {
    href: "/route/dashboard",
    name: "dashboard/Parallel Route (Sub Navigation and default.tsx)/Protactive Route",
  },
  {
    href: "/route/f1",
    name: "f1/Intercepting Routes",
  },
  {
    href: "/route/photo-feed",
    name: "photo-feed/Parallel Interception Route",
  },
  {
    href: "/route/templateUseCase",
    name: "templateUseCase",
  },
];
