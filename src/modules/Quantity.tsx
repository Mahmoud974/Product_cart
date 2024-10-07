"use client";
import { CirclePlus, CircleMinus } from "lucide-react";
import { useState, useEffect } from "react";

type Props = {
  quantityUser: number;
  onQuantityChange: (quantity: number) => void; // Fonction de rappel pour notifier le parent
};

const CounterQuantity = ({ quantityUser = 0, onQuantityChange }: Props) => {
  const customButton: string =
    "text-2xl bg-gray-200 text-gray-400 font-bold w-12 h-12 flex items-center justify-center";
  const [quantity, setQuantity] = useState<number>(quantityUser);

  useEffect(() => {
    onQuantityChange(quantity);
  }, [quantity]);
  const addQuantity = (): void => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const lessQuantity = (): void => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex gap-3 items-center">
      <p
        className={customButton}
        onClick={lessQuantity}
        data-testid="decrease-button"
      >
        <CircleMinus />
      </p>
      <p className="bg-gray-200 text-md w-12 h-12 text-2xl mx-2 text-center flex items-center justify-center text-blue-800 font-bold">
        {quantity}
      </p>
      <p
        className={customButton}
        onClick={addQuantity}
        data-testid="increase-button"
      >
        <CirclePlus />
      </p>
    </div>
  );
};

export default CounterQuantity;
