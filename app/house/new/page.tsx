import { db } from "@/app/db";
import { redirect } from "next/navigation";

const NewHouse = () => {
  async function createHouse(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const image = formData.get("image") as string;
    const age = formData.get("age") as string;

    await db.house.create({
      data: {
        title,
        image,
        age,
      },
    });

    redirect("/");
  }

  return (
    <div className="mt-10 px-8">
      <h1>New House</h1>
      <form
        className="flex flex-col space-y-6 p-6 max-w-md mx-auto bg-white rounded-xl shadow-md mt-10"
        action={createHouse}
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
      </form>
    </div>
  );
};

export default NewHouse;
