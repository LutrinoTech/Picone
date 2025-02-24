import { ReactNode } from "react";
import { db } from "@/app/db";
import Card from "@/app/ui/Card";
import Link from "next/link";

interface IHouse {
  id: string;
  title: string;
  image: string;
  age: string;
  likes: number;
}

export default async function Home() {
  const houses = await db.house.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const renderComponent: IHouse[] | ReactNode = houses.length ? (
    houses.map((house) => (
      <Card
        key={house.id}
        id={house.id}
        title={house.title}
        image={house.image}
        age={house.age}
        likes={house.likes.toString()}
      />
    ))
  ) : (
    <p>No houses found</p>
  );

  return (
    <main className="w-4/5 mx-auto mt-5">
      <div className="flex items-center justify-start">
        <p className="text-2xl">Picone gallery</p>
        <Link
          href="/house/new"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10"
        >
          Add House
        </Link>
      </div>

      <section className="flex flex-row flex-wrap gap-4 mt-10 [&>*]:basis-[calc(33.33%-1rem)] mb-10">
        {renderComponent}
      </section>
    </main>
  );
}
