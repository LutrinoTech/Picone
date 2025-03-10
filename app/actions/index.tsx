"use server";

import { redirect } from "next/navigation";
import { db } from "../db";

export async function deleteHouse(id: number) {
  await db.house.delete({ where: { id } });
  redirect("/");
}

export async function createHouse(
  actionState: { message: string },
  data: FormData,
) {
  const title = data.get("title") as string;
  const image = data.get("image") as string;
  const age = data.get("age") as string;

  if (!title || !image || !age) {
    return { message: "Please fill in all fields!" };
  }

  await db.house.create({
    data: { title, image, age },
  });

  redirect("/");
}
