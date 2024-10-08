"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useTemplate } from "./hooks/useTemplate";
import { Dessert } from "./api/db/data";
import DialogAlert from "@/components/DialogAlert";
import CounterQuantity from "@/components/Quantity";
import Basket from "@/components/Basket";

export default function Page() {
  const [tab, setTab] = useState<{ item: Dessert; quantity: number }[]>([]);
  const { data: dessert } = useTemplate();
  const [activeButton, setActiveButton] = useState<number | null>(null); // 1. État pour le bouton actif

  const handleAddToCart = (item: Dessert, index: number) => {
    const existingItem = tab.find((entry) => entry.item.name === item.name);
    if (existingItem) {
      setTab(
        tab.map((entry) =>
          entry.item.name === item.name
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        )
      );
    } else {
      setTab((prevTab) => [...prevTab, { item, quantity: 1 }]);
    }
    setActiveButton(index); // 2. Définit le bouton actif lorsque cliqué
  };

  const updateQuantity = (item: Dessert, quantity: number) => {
    setTab(
      tab.map((entry) =>
        entry.item.name === item.name ? { ...entry, quantity } : entry
      )
    );
  };

  const handleQuantityChange = useCallback(
    (item: Dessert, newQuantity: number) => {
      updateQuantity(item, newQuantity);
    },
    [updateQuantity]
  );

  return (
    <main className="mx-auto container flex lg:flex-row flex-col justify-center gap-4 md:my-10">
      <div className="mx-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold my-7">Desserts</h1>
          <DialogAlert itemCount={tab.length} />
        </div>
        <ul className="grid lg:grid-cols-3 grid-cols-1 gap-3">
          {dessert?.map((item: Dessert, index: number) => {
            const cartItem = tab.find((entry) => entry.item.name === item.name);
            return (
              <li key={index} className="">
                <div className={`flex flex-col items-center `}>
                  <Image
                    className={`object-cover lg:w-60 shadow-md h-60 rounded-2xl ${
                      cartItem ? "outline outline-5 outline-orange-700" : ""
                    }`}
                    src={item.image.desktop}
                    alt={item.name}
                    width={1000}
                    height={1000}
                    priority
                  />
                  <Button
                    onClick={() => handleAddToCart(item, index)} // Passe l'index du bouton
                    className={`border-none cursor-pointer hover:bg-orange-800 hover:text-white text-grey-900 max-w-[10rem] w-full h-[3rem] rounded-full border  flex items-center justify-center mt-[-1rem]  ${
                      activeButton === index
                        ? "bg-orange-700 text-white"
                        : "bg-white"
                    } `}
                  >
                    <div className="w-full flex justify-center items-center ">
                      {cartItem ? (
                        <CounterQuantity
                          quantityUser={cartItem.quantity}
                          onQuantityChange={(newQuantity) =>
                            handleQuantityChange(item, newQuantity)
                          }
                        />
                      ) : (
                        <div className="flex items-center hover:text-white">
                          <ShoppingCart
                            className={cartItem ? "text-white" : "text-red-600"}
                          />
                          <p className="ml-2">Add to Cart</p>
                        </div>
                      )}
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col items-start text-left mt-2 lg:px-0">
                  <small>{item.category}</small>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-orange-600">€{item.price.toFixed(2)}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Basket the article */}
      <Basket tab={tab} />
    </main>
  );
}
