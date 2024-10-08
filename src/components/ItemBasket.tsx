import React from "react";
import { CircleX } from "lucide-react";
import TotalItem from "./TotalItem";
import { Dessert } from "@/app/api/db/data";
import Image from "next/image";
type Props = {
  tab: Dessert;
  bgItemArticle: string;
  noOrder: boolean;
};

export default function ItemBasket({ tab, bgItemArticle, noOrder }: Props) {
  console.log(tab);

  return (
    <div className={`flex flex-col w-full my-8  ${bgItemArticle}`}>
      {tab &&
        tab?.map((entry: any, index: any) => (
          <div
            key={index}
            className="flex flex-col justify-between mt-2 border-b border-gray-300 pb-2"
          >
            <div
              className={` flex items-center ${!noOrder && "justify-between"}`}
            >
              {noOrder && (
                <div>
                  <Image
                    className="object-cover w-12 mr-3 rounded-xl"
                    // src={entry.image.mobile}
                    alt={entry.name}
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
                  <p className="text-orange-700 text-bold">{entry.quantity}x</p>
                  <div className="flex gap-2">
                    <p className="text-md ">
                      ${(entry.item.price * entry.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              {!noOrder && (
                <CircleX className="text-orange-900 cursor-pointer" />
              )}
            </div>
          </div>
        ))}
      {noOrder && <TotalItem tab={tab} />}
    </div>
  );
}
