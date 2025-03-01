"use client";

import { createProduct, FormState } from "@/actions/products";
import { Submit } from "@/components/submit";
import { useActionState } from "react";

export default function AddProductPage() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState
  );

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96 mx-auto">
      <div>
        <label htmlFor="title" className="text-white">
          Title
        </label>
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
        <input
          type="text"
          name="title"
          id="title"
          className="block w-full p-2 text-black border rounded"
        />
      </div>
      <div>
        <label htmlFor="price" className="text-white">
          Price
        </label>
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
        <input
          type="number"
          name="price"
          id="price"
          className="block w-full p-2 text-black border rounded"
        />
      </div>
      <div>
        <label htmlFor="description" className="text-white">
          Description
        </label>
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
        <textarea
          name="description"
          id="description"
          className="block w-full p-2 text-black border rounded"
        />
      </div>
      <Submit />
    </form>
  );
}
