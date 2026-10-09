import { apiToken, endpoints, useAPIGet } from "./utils";


export const useRandomNorrisJoke = async () => {
  try {
    const res = await useAPIGet({ queryKey: ["random"], endpoint: endpoints.random });
    return res;
  } catch (error) {
    console.error("Error fetching random joke:", error);
    throw error;
  }
};

export const useNorrisJokeById = async (id: string) => {
  try {
    const res = await useAPIGet({ queryKey: ["joke", id], endpoint: endpoints.byId(id) });
    return res;
  } catch (error) {
    console.error(`Error fetching joke with ID ${id}:`, error);
    throw error;
  }
}