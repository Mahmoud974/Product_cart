import { Dessert } from "@/app/api/db/data";
import React from "react";

type Props = {
  tab: { item: Dessert; quantity: number; category: string }[];
};
export default function TotalItem({ tab }: Props) {
  return (
    <div className="flex w-full justify-between items-center">
      <p>Order Total</p>
      <p className="text-3xl font-[900] text-orange-950">
        $
        {tab &&
          tab
            .map((entry) => entry.item.price * entry.quantity)
            .reduce((acc: number, price: number) => acc + price, 0)
            .toFixed(2)}
      </p>
    </div>
  );
}
