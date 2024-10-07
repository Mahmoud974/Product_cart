import React from "react";
import Image from "next/image";
import { CircleX, TreeDeciduous } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Basket({ tab }: any) {
  return (
    <div className="mx-4 flex jus h-full max-w-full">
      <div className="bg-white  flex p-8 flex-col items-start pt-8 max-w-2xl w-full shadow-xl rounded-xl justify-center my-4">
        <p className="text-red-600 font-bold text-2xl text-left">
          Your Cart ({tab.length}){" "}
        </p>
        <div className="flex flex-col w-full my-8">
          {tab.map((entry: any, index: any) => (
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
            <div className="flex justify-between  items-center">
              <p>Order Total</p>
              <p className="text-2xl font-bold">
                €
                {tab
                  .map((entry: any) => entry.item.price * entry.quantity)
                  .reduce((acc: any, price: any) => acc + price, 0)
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
  );
}
