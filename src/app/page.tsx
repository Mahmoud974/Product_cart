"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useTemplate } from "./hooks/useTemplate";
import { Dessert } from "./api/db/data";

export default function Page() {
  const { data: dessert } = useTemplate();
  console.log(dessert);

  return (
    <main className="mx-auto container flex">
      <div>
        <h1 className="text-2xl font-bold my-7">Desserts</h1>
        <ul className="grid grid-cols-3 gap-3">
          {dessert?.map((item: Dessert, index: number) => (
            <li className="" key={index}>
              <div className="flex flex-col  items-center">
                <Image
                  className="object-cover w-60 h-60 rounded-xl"
                  src={item.image.desktop}
                  alt="Baklava"
                  width={1000}
                  height={1000}
                  priority
                />
                <Button className="cursor-pointer bg-white hover:bg-red-600 hover:text-white text-grey-900 max-w-[10rem] rounded-full border border-red-300 flex items-center justify-center mt-[-1rem]">
                  <ShoppingCart className="text-red-400" />
                  <p className="ml-2">Add to Cart</p>
                </Button>
              </div>
              <div className=" flex  flex-col items-start text-left mt-2">
                <small>{item.category}</small>
                <p className="font-bold">{item.name}</p>
                <p className="text-orange-600">€{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Basket */}
      <div className="bg-white flex  max-w-2xl h-auto w-72">
        <p className="text-red-600 font-bold text-2xl">Your Cart(7)</p>
      </div>
    </main>
  );
}
