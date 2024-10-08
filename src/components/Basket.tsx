import React, { useState } from "react";
import Image from "next/image";
import { CircleX, TreeDeciduous } from "lucide-react";
import { Button } from "@/components/ui/button";
import CheckBasket from "./CheckBasket";
import ItemBasket from "./ItemBasket";
import TotalItem from "./TotalItem";

export default function Basket({ tab }: any) {
  const [noButton, setButton] = useState<boolean>(true);
  return (
    <div className="mx-4 flex jus h-full max-w-full">
      <div className="bg-white  flex p-8 flex-col items-start pt-8 max-w-2xl w-full shadow-xl rounded-xl justify-center my-4">
        <p className="text-red-600 font-bold text-2xl text-left">
          Your Cart ({tab && tab.length}){" "}
        </p>
        <ItemBasket tab={tab} />

        {tab && tab.length === 0 ? (
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
            <TotalItem tab={tab} />
            <div className="bg-orange-50 px-4 my-5 flex items-center">
              <TreeDeciduous className="text-green-800 " />
              <p className=" my-3 text-md ml-2">
                This is a <span className="font-bold">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>
          </div>
        )}

        {tab && tab.length > 0 && <CheckBasket tab={tab} noButton={true} />}
      </div>
    </div>
  );
}
