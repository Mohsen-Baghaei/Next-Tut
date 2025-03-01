import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

export default function AddProductPage() {
  const createProduct = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;
    await addProduct(title, parseInt(price), description);
    redirect("/dataFetching/product-db");
  };

  return (
    <form action={createProduct} className="p-4 space-y-4 max-w-96 mx-auto">
      <label htmlFor="title" className="text-white">
        Title
      </label>
      <input
        type="text"
        name="title"
        id="title"
        className="block w-full p-2 text-black border rounded"
      />
      <label htmlFor="price" className="text-white">
        Price
      </label>
      <input
        type="number"
        name="price"
        id="price"
        className="block w-full p-2 text-black border rounded"
      />
      <label htmlFor="description" className="text-white">
        Description
      </label>
      <textarea
        name="description"
        id="description"
        className="block w-full p-2 text-black border rounded"
      />
      <button
        type="submit"
        className="block w-full text-white bg-blue-500 rounded disabled:bg-gray-500
    "
      >
        Add Product
      </button>
    </form>
  );
}
