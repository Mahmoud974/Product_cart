import React from "react";
import { CircleX } from "lucide-react";
import TotalItem from "./TotalItem";
import { Dessert } from "@/app/api/db/data";
import Image from "next/image";

type Props = {
  tab: { item: Dessert; quantity: number }[];
  bgItemArticle: string;
  noOrder: boolean;
  onRemoveItem: (item: Dessert) => void; // Nouvelle prop pour supprimer un article
};

export default function ItemBasket({
  tab,
  bgItemArticle,
  noOrder,
  onRemoveItem,
}: Props) {
  return (
    <div className={`flex flex-col w-full my-8 ${bgItemArticle}`}>
      {tab &&
        tab?.map((entry, index) => (
          <div
            key={index}
            className="flex flex-col justify-between mt-2 border-b border-gray-300 pb-2"
          >
            <div
              className={`flex items-center ${!noOrder && "justify-between"}`}
            >
              {noOrder && (
                <div>
                  <Image
                    className="object-cover w-12 mr-3 rounded-xl"
                    src={entry.item.image.mobile}
                    alt={entry.item.name}
                    width={1000}
                    height={1000}
                    priority
                  />
                </div>
              )}
              <div>
                <p className="text-md font-bold text-orange-700">
                  {entry.item.name}
                </p>
                <div className="flex items-center gap-6">
                  <p className="text-orange-700 font-bold">{entry.quantity}x</p>
                  <div className="flex gap-2">
                    <p>${!noOrder && entry.quantity.toFixed(2)}</p>
                    <p className="text-md font-bold ">
                      ${(entry.item.price * entry.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              {!noOrder && (
                <CircleX
                  className="text-orange-900 cursor-pointer"
                  onClick={() => {
                    console.log("Item removed: ", entry.item.name);
                    onRemoveItem(entry.item); // Appel de la fonction de suppression
                  }}
                />
              )}
            </div>
          </div>
        ))}
      {noOrder && <TotalItem tab={tab} />}
    </div>
  );
}
