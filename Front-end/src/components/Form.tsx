import { useForm } from "react-hook-form";
import { useCreateSignUp } from "../hooks/useCreateSignUp";

interface Inputs {
  email: string;
  username: string;
  password: string;
}

export function Form() {
  const { mutateAsync } = useCreateSignUp();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit = async (data: Inputs) => {
    try {
      await mutateAsync(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex font-nunito text-left text-xl gap-3 justify-center w-full px-[4rem] flex-col rounded-xl"
    >
      <label className="font-bold" htmlFor="email">
        E-mail
      </label>
      <input
        placeholder="Type your email"
        className="h-12 pl-2 rounded bg-gray-300"
        type="email"
        id="email"
        {...register("email")}
      />

      <label className="font-bold" htmlFor="username">
        Username
      </label>
      <input
        placeholder="Type your username"
        className="h-12 pl-2 rounded bg-gray-300"
        type="text"
        id="name"
        {...register("username")}
      />

      <label className="font-bold" htmlFor="password">
        Password
      </label>
      <input
        placeholder="Type your password"
        className="h-12 pl-2 rounded bg-gray-300"
        type="password"
        id="password"
        {...register("password")}
      />

      <button className="hover:bg-green-700 transition-colors rounded bg-green-500 h-12">
        <span className="font-bold">Create</span>
      </button>
    </form>
  );
}
