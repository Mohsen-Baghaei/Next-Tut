"use client";

import { useRouter } from "next/router";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <h2>Order Product with use client</h2>
      <button
        className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
        onClick={handleClick}
      >
        Place Order
      </button>
    </>
  );
}
