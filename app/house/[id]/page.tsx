import { db } from "@/app/db";
import Card from "@/app/ui/Card";

interface IHouse {
  params: Promise<{ id: string }>;
}

export default async function House(props: IHouse) {
  const { id } = await props.params;
  const house = await db.house.findFirst({
    where: { id: parseInt(id) },
  });

  return (
    <main className="w-4/5 mx-auto mt-5">
      <section className="flex flex-row flex-wrap gap-4 mt-10 [&>*]:basis-[calc(33.33%-1rem)] mb-10">
        {house && (
          <Card
            id={house.id}
            title={house.title}
            image={house.image}
            age={house.age}
            likes={house.likes.toString()}
          />
        )}
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const houses = await db.house.findMany();
  return houses.map((house) => ({ id: house.id.toString() }));
}
