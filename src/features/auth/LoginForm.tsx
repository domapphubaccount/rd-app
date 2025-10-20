import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginData } from "./schema";
import PasswordField from "@/components/shared/PasswordField";
import InputField from "@/components/shared/InputField";
import SubmitBtn from "@/components/shared/SubmitBtn";
import useLogin from "./useLogin";

export default function LoginForm() {
  const { isPending, loginAction } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form
      className="absolute left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white shadow-[#959da533_0_8px_24px] rounded-[24px] py-6 px-5 w-[min(100%-32px,520px)]"
      onSubmit={handleSubmit((data) => loginAction(data))}
    >
      <h2 className="text-[var(--main)] text-[22px] font-bold text-center mb-2">
        Welcome In <span className="font-bold text-[var(--text)]">RD APP</span>
      </h2>
      <p className="text-[var(--text)] text-[14px] mb-12 text-center">
        Please login to continue using our services
      </p>

      <div className="flex flex-col gap-5">
        <InputField
          label="Email"
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          error={errors.email?.message}
        />

        <PasswordField
          label="Password"
          id="password"
          placeholder="Enter your password"
          {...register("password")}
          error={errors.password?.message}
        />

        <div className="flex items-center gap-2">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className="text-[14px]">
            Remember me
          </label>
        </div>

        <div className="mt-3">
          <SubmitBtn text="Login" loading={isPending} />
        </div>
      </div>
    </form>
  );
}
