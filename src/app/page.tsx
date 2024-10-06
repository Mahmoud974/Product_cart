"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useTemplate } from "./hooks/useTemplate";
import { Dessert } from "./api/db/data";
import DialogAlert from "@/components/DialogAlert";

export default function Page() {
  const [tab, setTab] = useState<Dessert[]>([]);
  const [addBoolean, setAddBoolean] = useState<boolean>(false);
  const { data: dessert } = useTemplate();
  console.log(
    tab.map((item) => item.price).reduce((acc: any, item: any) => acc + item, 0)
  );

  const handleAddToCart = (item: Dessert) => {
    setAddBoolean(true);
    setTab((prevTab) => [...prevTab, item]);
  };

  return (
    <main className="mx-auto container flex lg:flex-row flex-col justify-center gap-4 md:my-10">
      <div className="mx-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold my-7">Desserts</h1>
          <DialogAlert />
        </div>
        <ul className="grid lg:grid-cols-3 grid-cols-1 gap-3">
          {dessert?.map((item: Dessert, index: number) => (
            <li key={index} className="">
              <div className="flex flex-col items-center ">
                <Image
                  className="object-cover  lg:w-60  shadow-md   h-60 rounded-2xl"
                  src={item.image.desktop}
                  alt={item.name}
                  width={1000}
                  height={1000}
                  priority
                />
                <Button
                  onClick={() => handleAddToCart(item)}
                  className="cursor-pointer bg-white hover:bg-red-600 hover:text-white text-grey-900 max-w-[10rem] rounded-full border border-red-300 flex items-center justify-center mt-[-1rem]"
                >
                  <ShoppingCart className="text-red-400" />
                  <p className="ml-2">Add to Cart</p>
                </Button>
              </div>
              <div className="flex flex-col items-start text-left mt-2  lg:px-0">
                <small>{item.category}</small>
                <p className="font-bold">{item.name}</p>
                <p className="text-orange-600">€{item.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Panier */}
      <div className="mx-4 flex  h-full ">
        <div className="bg-white  flex p-8 flex-col items-start  pt-8 max-w-2xl w-full shadow-xl rounded-xl justify-center  my-4">
          <p className="text-red-600 font-bold text-2xl text-left">
            Your Cart ({tab.length}){" "}
          </p>
          <div className="flex flex-col ">
            {tab &&
              tab.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between items-center mt-2 "
                >
                  <p className="text-lg">{item.name}</p>
                  <p className="text-lg">{item.price.toFixed(2)}</p>
                </div>
              ))}
          </div>

          {!addBoolean ? (
            <div>
              <Image
                className="object-cover  w-44  py-8 mx-12 rounded-2xl"
                src="/assets/images/cake.png"
                alt="basket empty"
                width={1000}
                height={1000}
                priority
              />
              <p className="text-orange-900 text-sm flex mx-auto justify-center">
                Your added items will appear here
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-evenly">
              <p>Order Total</p>
              <p className="text-2xl font-bold">
                $
                {tab
                  .map((item) => item.price)
                  .reduce((acc: any, item: any) => acc + item, 0)}
              </p>
              <div>
                <p>
                  This is a <span className="font-bold">carbon-neutral</span>{" "}
                  delivery
                </p>
              </div>
            </div>
          )}

          {addBoolean && (
            <Button className="bg-orange-700 w-full  mx-auto rounded-full">
              Confirm Order
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}
