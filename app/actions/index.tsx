"use server";

import { redirect } from "next/navigation";
import { db } from "../db";

export async function deleteHouse(id: number) {
  await db.house.delete({ where: { id } });
  redirect("/");
}
