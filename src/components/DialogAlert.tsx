import { Dessert } from "@/app/api/db/data";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ShoppingBasket } from "lucide-react";
import React from "react";

type DialogAlertProps = {
  itemCount: number;
  tab: any;
};

export default function DialogAlert({ tab, itemCount }: DialogAlertProps) {
  console.log(tab);

  return (
    <AlertDialog>
      <AlertDialogTrigger className="relative">
        <ShoppingBasket className="lg:hidden flex" />
        {itemCount > 0 && (
          <span className=" lg:hidden flex absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            {itemCount}
          </span>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
