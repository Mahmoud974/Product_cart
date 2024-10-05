import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchElements = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const useTemplate = () => {
  return useQuery({
    queryKey: ["get-template"],
    queryFn: () => fetchElements("http://localhost:3000/api/dessert"),
  });
};
