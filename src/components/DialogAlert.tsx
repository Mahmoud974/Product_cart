import { useCounter } from "@/app/provider/queryApiDessert";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ShoppingBasket } from "lucide-react";
import React from "react";
import Basket from "./Basket";

type DialogAlertProps = {
  itemCount: number;
  tab: any;
};

export default function DialogAlert({ tab, itemCount }: DialogAlertProps) {
  const { modifyCartItem, isOpen } = useCounter();

  return (
    <AlertDialog>
      <AlertDialogTrigger className="relative">
        <ShoppingBasket className="lg:hidden flex md:mr-7" />
        {itemCount > 0 && (
          <span className=" lg:hidden flex absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full  md:mr-7">
            {itemCount}
          </span>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogDescription>
            <Basket
              tab={tab}
              onRemoveItem={(item) => modifyCartItem(item, -100)}
              isOpen={isOpen}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter></AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
