export type DataFetchingType = {
  href: string;
  name: string;
};

export const DataFetching: DataFetchingType[] = [
  {
    href: "/dataFetching/users-client",
    name: "users-client/Fetching Data in Client Components",
  },
  {
    href: "/dataFetching/users-server",
    name: "users-server/Loading and Error States",
  },
  {
    href: "/dataFetching/posts-sequential",
    name: "posts-sequential/Sequential Data Fetching",
  },
  {
    href: "/dataFetching/user-parallel/1",
    name: "user-parallel/Parallel Data Fetching",
  },
  {
    href: "/dataFetching/products-db",
    name: "products-db/Featching Ffrom a Database (Prisma)",
  },
];
