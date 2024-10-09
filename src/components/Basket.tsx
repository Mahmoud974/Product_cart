import React from "react";
import Image from "next/image";
import { CircleX, TreeDeciduous } from "lucide-react";
import CheckBasket from "./CheckBasket";
import ItemBasket from "./ItemBasket";
import TotalItem from "./TotalItem";
import { Dessert } from "@/app/api/db/data";

type Props = {
  tab: { item: Dessert; quantity: number }[];
  isOpen: any;

  onRemoveItem: (item: Dessert) => void;
};

export default function Basket({ tab, onRemoveItem, isOpen }: Props) {
  return (
    <div className="lg:flex mx-4 my-10  h-full max-w-full">
      <div
        className={`${
          isOpen ? "" : "bg-white p-8 shadow-xl pt-8 my-4 "
        } flex  flex-col items-start  max-w-2xl w-full  rounded-xl justify-center `}
      >
        <div className="flex justify-between items-center w-full">
          <p className="text-red-600 font-bold text-2xl text-left">
            Your Cart ({tab.length}){" "}
          </p>
          <CircleX className="cursor-pointer text-red-600 lg:hidden" />
        </div>

        {tab.length === 0 ? (
          <div className="mx-auto">
            <Image
              className="object-cover lg:w-44 w-60  py-8 lg:mx-12 mx-0 rounded-2xl flex items-center justify-center"
              src="/assets/images/cake.png"
              alt="basket empty"
              width={1000}
              height={1000}
              loading="lazy"
            />
            <p className="text-orange-900 text-sm flex mx-auto justify-center">
              Your added items will appear here
            </p>
          </div>
        ) : (
          <div className="flex flex-col w-full">
            <ItemBasket
              tab={tab}
              bgItemArticle="bg-white"
              noOrder={false}
              onRemoveItem={onRemoveItem}
            />
            <div className="flex flex-col items-center justify-evenly">
              <TotalItem tab={tab} />
              <div
                className={`bg-orange-50 px-4 my-5 flex items-center justify-center ${
                  isOpen ? "w-full text-center" : ""
                }`}
              >
                <TreeDeciduous className="text-green-800" />
                <p className="my-3 text-md ml-2">
                  This is a <span className="font-bold">carbon-neutral</span>{" "}
                  delivery
                </p>
              </div>
            </div>
          </div>
        )}

        {tab.length > 0 && <CheckBasket tab={tab} noButton={true} />}
      </div>
    </div>
  );
}
