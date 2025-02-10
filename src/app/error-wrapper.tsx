"use client";

import { useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = "An error occurred",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);
  if (error) throw new Error(message);
  return (
    <button
      title="Simulator an error"
      className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold text-sm"
      onClick={() => setError((prev) => !prev)}
    ></button>
  );
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300 w-full">
      <div className="absolute top-0 left-4 -translate-y1/2">
        <ErrorSimulator message="Simulated error in root layout" />
      </div>
      {children}
    </div>
  );
};
