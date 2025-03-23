import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchElements = async (url: string) => {
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const useTemplate = () => {
  const apiUrl: any =
    process.env.NODE_ENV === "development" &&
    "https://zl3olqriv5.execute-api.eu-west-3.amazonaws.com/dev/resource";

  return useQuery({
    queryKey: ["get-template"],
    queryFn: () => fetchElements(apiUrl),
  });
};

//https://zl3olqriv5.execute-api.eu-west-3.amazonaws.com/dev/resource
