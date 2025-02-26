"use client";

import { useTheme } from "@/components/theme-provider";

export default function Context() {
  const theme = useTheme();

  return (
    <h2 style={{ color: theme.colors.primary }}>
      for Code Check{" "}
      <span style={{ color: theme.colors.secondary }}>
        /src/components/theme-provider
      </span>{" "}
      & <span style={{ color: theme.colors.secondary }}>src/app/layout</span>
    </h2>
  );
}
