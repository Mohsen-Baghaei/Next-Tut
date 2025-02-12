import Link from "next/link";

export default function ProductsList() {
  return (
    <>
      <h1>Products Page</h1>
      <Link href="/products/1">product1</Link>
      <Link href="/products/2" replace>
        product1
      </Link>
    </>
  );
}
