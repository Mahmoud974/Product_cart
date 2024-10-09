"use client";

import {
  createContext,
  useContext,
  useCallback,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useTemplate } from "../hooks/useTemplate";
import { Dessert } from "../api/db/data";

interface CounterContextType {
  dessert: Dessert[] | undefined;
  tab: { item: Dessert; quantity: number }[];
  setTab: React.Dispatch<
    React.SetStateAction<{ item: Dessert; quantity: number }[]>
  >;
  modifyCartItem: (item: Dessert, quantityChange: number) => void;
  isScrolled: boolean;
  warning: string;
  isOpen: boolean;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [warning, setWarning] = useState("");
  const { data: dessert } = useTemplate(); // Récupérer les données du hook
  const [tab, setTab] = useState<{ item: Dessert; quantity: number }[]>([]);
  const isOpen = true;

  // Fonction pour modifier le panier
  const modifyCartItem = useCallback(
    (item: Dessert, quantityChange: number) => {
      setTab((prevTab) => {
        const existingItem = prevTab.find(
          (entry) => entry.item.name === item.name
        );

        if (existingItem) {
          const newQuantity = existingItem.quantity + quantityChange;
          if (newQuantity <= 0) {
            setWarning(`${item.name} a été retiré du panier.`);
            setTimeout(() => setWarning(""), 3000);
            return prevTab.filter((entry) => entry.item.name !== item.name);
          } else {
            return prevTab.map((entry) =>
              entry.item.name === item.name
                ? { ...entry, quantity: newQuantity }
                : entry
            );
          }
        } else if (quantityChange > 0) {
          return [...prevTab, { item, quantity: 1 }];
        }
        return prevTab;
      });
    },
    []
  );

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <CounterContext.Provider
      value={{
        dessert,
        tab,
        setTab,
        modifyCartItem,
        isScrolled,
        warning,
        isOpen,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
