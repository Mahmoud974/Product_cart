import { CirclePlus, CircleMinus } from "lucide-react";
import { useState } from "react";

type Props = {
  quantityUser: number;
};
const CounterQuantity = ({ quantityUser = 12 }: Props) => {
  const customButton: string =
    "text-2xl bg-gray-200 text-gray-400 font-bold w-12 h-12 flex items-center justify-center";
  const [quantity, setQuantity] = useState<number>(quantityUser);

  const addQuantity = (): void => {
    setQuantity(quantity + 1);
  };

  const lessQuantity = (): void => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex gap-3 items-center">
      <button
        className={customButton}
        onClick={lessQuantity}
        data-testid="decrease-button"
      >
        <CircleMinus />
      </button>
      <p className="bg-gray-200 text-md w-12 h-12 text-2xl mx-2 text-center flex items-center justify-center text-blue-800 font-bold">
        {quantity}
      </p>
      <button
        className={customButton}
        onClick={addQuantity}
        data-testid="increase-button"
      >
        <CirclePlus />
      </button>
    </div>
  );
};

export default CounterQuantity;
