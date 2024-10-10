"use client";
import { useCounter } from "@/app/provider/queryApiDessert";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ShoppingBasket } from "lucide-react";
import React from "react";
import Basket from "./Basket";
import { Button } from "./ui/button";

type DialogAlertProps = {
  itemCount: number;
  tab: any;
};
export default function DialogAlert({ tab, itemCount }: DialogAlertProps) {
  const { modifyCartItem, isOpen } = useCounter();

  return (
    <AlertDialog>
      <AlertDialogTrigger className="relative">
        <ShoppingBasket className="lg:hidden flex" />
        {/* Counter of Basket */}
        <div className="mx-auto flex container justify-between">
          {itemCount > 0 && (
            <span
              className={`bg-orange-700 flex absolute mt-6 -top-2 -right-2  text-white text-xs font-bold px-2 py-1 rounded-full `}
            >
              {itemCount}
            </span>
          )}
        </div>
      </AlertDialogTrigger>

      <AlertDialogContent
        className={` ${isOpen ? "block" : "hidden"} lg:hidden`}
      >
        <AlertDialogHeader>
          <AlertDialogDescription>
            <Basket
              displayElement={"flex"}
              tab={tab}
              onRemoveItem={(item) => modifyCartItem(item, -100)}
              isOpen={isOpen}
            />
            <AlertDialogCancel className="border-none shadow-none -mt-16">
              <Button variant="default">Fermer le panier</Button>
            </AlertDialogCancel>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter></AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
