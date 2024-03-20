import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { userCreate, updateUser, googleLogin } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await userCreate(data.email, data.password);
      if (res.operationType === "signIn") {
        toast.success("User created success.");
        navigate("/");
      } else {
        toast.error("User created Failed!");
        navigate("/register");
      }
      await updateUser(data.name);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogle = async () => {
    await googleLogin();
    toast.success("User Account Create Success!");
    navigate("/");
  };

  return (
    <section className=" w-11/12 md:w-7/12 mx-auto mt-10 mb-10 border rounded-xl shadow-md bg-slate-50 md:p-10 p-2">
      <div>
        <h3 className=" text-2xl font-bold">Resolute Point</h3>
      </div>
      <div className=" mt-10">
        <h3 className=" text-xl font-semibold">Create your account</h3>
        <p className=" text-sm font-medium text-slate-600">
          Unlock exclusive perks - Sign up now for early access and special
          offers!{" "}
        </p>
      </div>
      <div className=" mt-5 mb-8">
        <button onClick={handleGoogle} className=" bg-slate-100 hover:bg-slate-200 shadow-md w-full text-center justify-center flex items-center gap-2 rounded-xl py-3 font-bold">
          <FcGoogle className=" text-2xl" />
          <span className=" text-slate-700">Continue with Google</span>
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mb-5">
          <label className="font-medium label">Ful Name</label>
          <input
            className=" w-full py-3 px-4 rounded-md shadow-md bg-slate-50"
            placeholder="Your name"
            type="text"
            name="name"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name.message}</p>
          )}
        </div>
        <div className="w-full mb-5">
          <label className=" label font-medium">Email Address</label>
          <input
            className=" w-full py-3 px-4 rounded-md shadow-md bg-slate-50"
            placeholder="Email address"
            type="email"
            name="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label className="font-medium label">Password</label>
          <input
            className=" w-full py-3 px-4 rounded-md shadow-md bg-slate-50"
            placeholder="**********"
            type="password"
            name="password"
            id="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className=" mt-10">
          <button
            type="submit"
            className=" font-bold py-3 rounded-xl bg-green-500 hover:bg-green-700 w-full text-center text-white text-xl"
          >
            Sign in
          </button>
        </div>
        <div
          className=" font-medium mt-4
        "
        >
          Already have an account?{" "}
          <Link to="/login" className=" text-green-600 underline">
            Log in
          </Link>{" "}
          now
        </div>
      </form>
    </section>
  );
};

export default Register;
