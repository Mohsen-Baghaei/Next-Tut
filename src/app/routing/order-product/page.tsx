"use client";
import { useRouter } from "next/navigation";

export default function OrderProducts() {
  const router = useRouter();

  const handleClick = () => {
    console.log("placeing order");
    router.push("/");
  };

  return (
    <div>
      <h1>Order Product</h1>
      <button
        className="border-2 border-solid border-violet-500"
        onClick={handleClick}
      >
        Place Order
      </button>
    </div>
  );
}
