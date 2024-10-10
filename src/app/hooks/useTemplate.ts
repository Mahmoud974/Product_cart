import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchElements = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const useTemplate = () => {
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/dessert"
      : "https://product-cart-plum.vercel.app/api/dessert";

  return useQuery({
    queryKey: ["get-template"],
    queryFn: () => fetchElements(apiUrl),
  });
};
