import React from "react";

export default function TotalItem({ tab }: any) {
  return (
    <div className="flex w-full justify-between items-center">
      <p>Order Total</p>
      <p className="text-3xl font-[900] text-orange-950">
        $
        {tab &&
          tab
            .map((entry: any) => entry.item.price * entry.quantity)
            .reduce((acc: any, price: any) => acc + price, 0)
            .toFixed(2)}
      </p>
    </div>
  );
}
