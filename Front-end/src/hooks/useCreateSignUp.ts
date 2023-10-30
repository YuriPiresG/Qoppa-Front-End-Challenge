import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../lib/api";

interface User {
  username: string;
  email: string;
  password: string;
}

export const useCreateSignUp = () => {
  useQueryClient();

  return useMutation({
    mutationFn: async (data: User) => {
      const response = await api.post("/singUp", { ...data });
      return response.data;
    },
  });
};
