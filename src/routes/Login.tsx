import LoginForm from "@/features/auth/LoginForm";

export default function Login() {
  return (
    <section className="p-4 relative h-[100vh]">
      <div className="relative h-[380px] rounded-[12px] md:block hidden">
        <img
          src="/images/login-bg.jpg"
          className="w-full h-full object-cover rounded-[18px]"
          alt="login-bg"
        />

        <div className="absolute top-4 left-4">
          <img
            src="/images/logo.png"
            className="h-[52px] filter brightness-0 invert"
            alt="logo"
          />
        </div>
      </div>

      <LoginForm />
    </section>
  );
}
