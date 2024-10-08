import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CircleCheck } from "lucide-react";
import React from "react";
import ItemBasket from "./ItemBasket";
import TotalItem from "./TotalItem";

export default function CheckBasket({ tab, noOrder }: any) {
  console.log(tab);

  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-white py-3 bg-orange-700 w-full mx-auto rounded-full">
        Confirm Order
      </AlertDialogTrigger>

      <AlertDialogContent className="h-autoo">
        <AlertDialogHeader>
          <AlertDialogTitle>
            <CircleCheck className="text-green-600 my-3" />
            <p className="text-3xl font-[800]">Order Confirmed</p>
            <small className="text-[100]">We hope you enjoy your food!</small>
          </AlertDialogTitle>
          <AlertDialogDescription>{tab.category}</AlertDialogDescription>
        </AlertDialogHeader>
        <ItemBasket
          tab={tab}
          bgItemArticle="bg-orange-50 px-8 rounded-xl pb-3 space-y-7"
          noOrder={true}
        />

        <AlertDialogFooter>
          <AlertDialogTrigger className="text-white py-3 bg-orange-700 w-full mx-auto rounded-full">
            Start New Order
          </AlertDialogTrigger>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
