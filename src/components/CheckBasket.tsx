import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CircleCheck, CircleX } from "lucide-react";
import React from "react";
import ItemBasket from "./ItemBasket";
import { useCounter } from "@/app/provider/queryApiDessert";

type Props = {
  tab: any;
};

export default function CheckBasket({ tab }: Props) {
  const { setTab } = useCounter();

  const handleRemoveItem = () => {
    setTab([]);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-white py-3 bg-orange-700 w-full mx-auto rounded-full">
        Confirm Order
      </AlertDialogTrigger>

      <AlertDialogContent className="h-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex justify-between items-center">
            <div>
              <CircleCheck className="text-green-600 my-3" />
              <p className="text-3xl font-[800]">Order Confirmed</p>
              <small className="text-[100]">We hope you enjoy your food!</small>
            </div>
            <AlertDialogCancel className="border-none shadow-none">
              <CircleX />
            </AlertDialogCancel>
          </AlertDialogTitle>
          <AlertDialogDescription>{tab.category}</AlertDialogDescription>
        </AlertDialogHeader>
        <ItemBasket
          onRemoveItem={handleRemoveItem}
          tab={tab}
          bgItemArticle="bg-orange-50 px-8 rounded-xl pb-3 space-y-7"
          noOrder={true}
        />

        <AlertDialogFooter>
          <AlertDialogTrigger
            className="text-white py-3 bg-orange-700 w-full mx-auto rounded-full"
            onClick={handleRemoveItem}
          >
            Start New Order
          </AlertDialogTrigger>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
