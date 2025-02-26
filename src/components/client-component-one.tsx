"use client";

import { useState } from "react";

export const ClientComponentOne = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState("mohsen");

  return (
    <div>
      <h2>Client Component One</h2>
      {children}
    </div>
  );
};
