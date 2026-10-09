import { useApiQuery } from "@tanstack/react-query";

export const baseUrl = "https://api.chucknorris.io/";
export const apiToken = import.meta.env.VITE_API_TOKEN_TEMPLATE;


export const endpoints = {
  random: `${baseUrl}jokes/random`,
  byId: (id: string) => `${baseUrl}jokes/${id}`,
};

export const useAPIGet = ({ queryKey, endpoint = "" } = {}) => {
  return useApiQuery({
    queryKey,
    queryFn: async () => {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiToken}`,
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          response
        );
      }

      return response.json();
    }
  });
}