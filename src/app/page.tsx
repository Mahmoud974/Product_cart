"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Dessert } from "./api/db/data";
import DialogAlert from "@/components/DialogAlert";
import CounterQuantity from "@/components/Quantity";
import Basket from "@/components/Basket";
import { useCounter } from "./provider/queryApiDessert";

export default function Page() {
  const { dessert, tab, modifyCartItem, isScrolled, warning, isOpen } =
    useCounter();

  if (!dessert) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <>
      {warning && (
        <div className="alert" role="alert">
          {warning}
        </div>
      )}
      <header
        className={`flex mx-auto lg:hidden items-center justify-between w-full sticky top-0 bg-gradient-to-r from-[#feffee]/40 to-[#ffffff]/80 backdrop-blur-md z-10 px-4 my-3 ${
          isScrolled ? "backdrop-blur-md" : ""
        }`}
      >
        <div className="mx-auto flex container justify-between">
          <h1 className="text-xl font-bold my-7">Desserts</h1>
          <DialogAlert tab={tab} itemCount={tab.length} />
        </div>
      </header>
      <main className="mx-auto container flex lg:flex-row flex-col justify-center gap-4 md:py-10">
        <div className="mx-4 mb-8">
          <div className="lg:flex hidden items-center justify-between w-full lg:relative sticky top-0 md:bg-none bg-[#fefff3] my-2 ">
            <h1 className="text-3xl font-bold my-7">Desserts</h1>
          </div>

          <ul className="grid lg:grid-cols-3 grid-cols-1 gap-3" role="list">
            {dessert?.map((item: Dessert) => {
              const cartItem = tab.find(
                (entry: { item: Dessert; quantity: number }) =>
                  entry.item.name === item.name
              );

              return (
                <li key={item.id} role="listitem">
                  <div className="flex flex-col items-center">
                    <Image
                      priority
                      className={`object-cover lg:w-60 shadow-md h-60 rounded-2xl cursor-pointer ${
                        cartItem && cartItem.quantity > 0
                          ? "outline outline-4 outline-orange-700"
                          : ""
                      }`}
                      src={item.image.desktop}
                      alt={item.name}
                      width={1000}
                      height={1000}
                      onClick={() => modifyCartItem(item, 1)}
                      role="button"
                      tabIndex={0}
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          modifyCartItem(item, 1);
                        }
                      }}
                    />
                    <Button
                      onClick={() => modifyCartItem(item, 1)}
                      className={`border-none cursor-pointer hover:bg-orange-800 hover:text-white text-grey-900 max-w-[10rem] w-full h-[3rem] rounded-full border flex items-center justify-center mt-[-1rem] ${
                        cartItem && cartItem.quantity > 0
                          ? "bg-orange-700 text-white"
                          : "bg-white"
                      }`}
                      aria-label={`Ajouter ${item.name} au panier`}
                    >
                      <div className="w-full flex justify-center items-center ">
                        {cartItem && cartItem.quantity > 0 ? (
                          <CounterQuantity
                            quantityUser={cartItem.quantity}
                            onQuantityChange={(newQuantity) =>
                              modifyCartItem(
                                item,
                                newQuantity - cartItem.quantity
                              )
                            }
                          />
                        ) : (
                          <div className="flex items-center hover:text-white">
                            <ShoppingCart className="text-red-600" />
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

        {isOpen && (
          <Basket
            displayElement={"hidden"}
            tab={tab}
            onRemoveItem={(item) => modifyCartItem(item, -100)}
            isOpen={false}
          />
        )}
      </main>
    </>
  );
}
