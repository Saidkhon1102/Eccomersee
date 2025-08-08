import { Link } from "react-router";
import FormInput from "../components/FormInput";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const { login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault;

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    login(email, password);
  };
  return (
    <section className="grid place-items-center w-full max-w-105 h-full max-h-100 mx-auto my-auto p-2 rounded-2xl bg-[#00e6088b]">
      <div className="w-full flex flex-col items-center">
        <h3 className="text-center font-bold text-3xl">Login</h3>
        <form onSubmit={handleSubmit} action="" className="w-full max-w-96">
          <FormInput label="Your Email:" name="email" type="email" />
          <FormInput label="New Password:" name="password" type="password" />
          <div className="my-10 flex justify-center">
            <button className=" btn btn-secondary w-full">Login</button>
          </div>
        </form>
        <div>
          <p>
            If you don't have account!{" "}
            <Link className="link link-primary" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
