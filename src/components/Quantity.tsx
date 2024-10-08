"use client";
import { CirclePlus, CircleMinus } from "lucide-react";
import { useState, useEffect } from "react";

type Props = {
  quantityUser: number;
  onQuantityChange: (quantity: number) => void;
};

const CounterQuantity = ({ quantityUser = 0, onQuantityChange }: Props) => {
  const [quantity, setQuantity] = useState<number>(quantityUser);

  useEffect(() => {
    onQuantityChange(quantity);
  }, [quantity]);
  const addQuantity = (): void => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
      return;
    }
  };

  const lessQuantity = (): void => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex gap-6 items-center">
      <p onClick={lessQuantity} data-testid="decrease-button">
        <CircleMinus />
      </p>
      <p>{quantity}</p>
      <p onClick={addQuantity} data-testid="increase-button">
        <CirclePlus />
      </p>
    </div>
  );
};

export default CounterQuantity;
