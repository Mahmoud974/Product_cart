"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CircleX, ShoppingCart, TreeDeciduous } from "lucide-react";
import { useTemplate } from "./hooks/useTemplate";
import { Dessert } from "./api/db/data";
import DialogAlert from "@/components/DialogAlert";
import CounterQuantity from "@/modules/Quantity";

export default function Page() {
  const [tab, setTab] = useState<{ item: Dessert; quantity: number }[]>([]);
  const { data: dessert } = useTemplate();

  const handleAddToCart = (item: Dessert) => {
    const existingItem = tab.find((entry) => entry.item.name === item.name);
    if (existingItem) {
      // Si l'article est déjà dans le panier, on incrémente sa quantité
      setTab(
        tab.map((entry) =>
          entry.item.name === item.name
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        )
      );
    } else {
      // Sinon, on l'ajoute avec une quantité de 1
      setTab((prevTab) => [...prevTab, { item, quantity: 1 }]);
    }
  };

  const updateQuantity = (item: Dessert, quantity: number) => {
    setTab(
      tab.map((entry) =>
        entry.item.name === item.name ? { ...entry, quantity } : entry
      )
    );
  };
  const handleQuantityChange = (item: Dessert, newQuantity: number) => {
    updateQuantity(item, newQuantity);
  };

  return (
    <main className="mx-auto container flex lg:flex-row flex-col justify-center gap-4 md:my-10">
      <div className="mx-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold my-7">Desserts</h1>
          <DialogAlert itemCount={tab.length} />
        </div>
        <ul className="grid lg:grid-cols-3 grid-cols-1 gap-3">
          {dessert?.map((item: Dessert, index: number) => {
            const cartItem = tab.find((entry) => entry.item.name === item.name);
            return (
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
                    className="cursor-pointer bg-white hover:bg-red-600 hover:text-white text-grey-900 max-w-[10rem] w-full h-[3rem] rounded-full border border-red-300 flex items-center justify-center mt-[-1rem]"
                  >
                    <div className="w-full flex justify-center items-center">
                      {cartItem ? (
                        <CounterQuantity
                          quantityUser={cartItem.quantity}
                          onQuantityChange={(newQuantity) =>
                            handleQuantityChange(item, newQuantity)
                          }
                        />
                      ) : (
                        <div className="flex items-center">
                          <ShoppingCart className="text-red-400" />
                          <p className="ml-2">Add to Cart</p>
                        </div>
                      )}
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col items-start text-left mt-2  lg:px-0">
                  <small>{item.category}</small>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-orange-600">€{item.price.toFixed(2)}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Basket */}
      <div className="mx-4 flex h-full max-w-full">
        <div className="bg-white flex p-8 flex-col items-start pt-8 max-w-2xl w-full shadow-xl rounded-xl justify-center my-4">
          <p className="text-red-600 font-bold text-2xl text-left">
            Your Cart ({tab.length}){" "}
          </p>
          <div className="flex flex-col ">
            {tab.map((entry, index) => (
              <div
                key={index}
                className="flex flex-col justify-between mt-2 border-b border-gray-300 pb-2"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-md font-bold text-orange-700">
                      {entry.item.name}
                    </p>
                    <div className="flex items-center gap-6">
                      <p className="text-orange-700 text-bold">
                        {entry.quantity}x
                      </p>
                      <div className="flex gap-2">
                        <p className="text-md ">
                          €{(entry.item.price * entry.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <CircleX className="text-orange-900" />
                </div>
              </div>
            ))}
          </div>

          {tab.length === 0 ? (
            <div>
              <Image
                className="object-cover w-44 py-8 mx-12 rounded-2xl"
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
            <div className="flex flex-col items-center justify-evenly">
              <div className="flex justify-between items-center">
                <p>Order Total</p>
                <p className="text-2xl font-bold">
                  €
                  {tab
                    .map((entry) => entry.item.price * entry.quantity)
                    .reduce((acc, price) => acc + price, 0)
                    .toFixed(2)}
                </p>
              </div>
              <div className="bg-orange-50 px-4 my-5 flex items-center">
                <TreeDeciduous className="text-green-800" />
                <p className=" my-3 text-md ml-2">
                  This is a <span className="font-bold">carbon-neutral</span>{" "}
                  delivery
                </p>
              </div>
            </div>
          )}

          {tab.length > 0 && (
            <Button className="bg-orange-700 w-full mx-auto rounded-full">
              Confirm Order
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}
