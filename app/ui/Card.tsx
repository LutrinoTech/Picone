"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { deleteHouse } from "@/app/actions";

interface CardProps {
  id: number;
  image: string;
  title: string;
  age: string;
  likes: string;
}

const Card: FC<CardProps> = ({ id, image, title, age, likes }) => {
  const handleDeleteHouse = deleteHouse.bind(null, id);

  return (
    <div className="rounded-lg shadow-lg bg-white overflow-hidden transition-shadow hover:shadow-xl w-1/3 h-auto">
      <div className="relative h-80 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 344px)100vw, 344px"
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-medium text-gray-900">
          <Link href={`/house/${id}`}>{title}</Link>
        </h3>
        <div className="mt-2 flex items-center justify-between text-gray-500">
          <div className="flex items-center gap-4">
            <span>{age} years old</span>
            <span>{likes} likes</span>
            <span>ID: {id}</span>
          </div>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={handleDeleteHouse}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
