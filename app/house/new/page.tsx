"use client";

import { createHouse } from "@/app/actions";
import { useActionState, startTransition } from "react";

const NewHouse = () => {
  const [formState, action] = useActionState(createHouse, { message: "" });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      action(formData);
    });
  }

  return (
    <div className="mt-10 px-8">
      <h1>New House</h1>
      <form
        className="flex flex-col space-y-6 p-6 max-w-md mx-auto bg-white rounded-xl shadow-md mt-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="title" className="text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="image" className="text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="age" className="text-sm font-medium text-gray-700">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create
        </button>

        <div>{formState.message}</div>
      </form>
    </div>
  );
};

export default NewHouse;
