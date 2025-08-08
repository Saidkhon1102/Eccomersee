import { Link } from "react-router";
import FormInput from "../components/FormInput";
import { useRegister } from "../hooks/useRegister";

function Register() {
  const { register } = useRegister();
  const handleSubmit = (e) => {
    e.preventDefault;

    const formData = new FormData(e.target);

    const firstName = formData.get("firstName");
    const laststName = formData.get("laststName");
    const email = formData.get("email");
    const password = formData.get("password");

    register(firstName, laststName, email, password);
  };
  return (
    <section className="grid place-items-center w-full max-w-105 h-full max-h-130 mx-auto my-auto p-2 rounded-2xl bg-[#292c298b]">
      <div className="w-full flex flex-col items-center">
        <h3 className="text-center font-bold text-3xl">Register</h3>
        <form onSubmit={handleSubmit} action="" className="w-full max-w-96">
          <FormInput label="First Name:" name="firstName" type="text" />
          <FormInput label="Last Name:" name="lastName" type="text" />
          <FormInput label="Your Email:" name="email" type="email" />
          <FormInput label="New Password:" name="password" type="password" />
          <div className="my-10 flex justify-center">
            <button className=" btn btn-secondary w-full italic ">Register</button>
          </div>
        </form>
        <div>
          <p>
            If you have account!{" "}
            <Link className="link link-primary" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
