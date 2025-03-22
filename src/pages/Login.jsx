import { useState } from "react";
import { Link as RouterLink} from "react-router-dom";
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../backend/config/firebase";
import Button from "../components/Button";
import Input from "../components/Input";
import toast from "react-hot-toast";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Enter an email!");
      return;
    } else if (!password) {
      toast.error("Enter a password!");
      return;
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Signed in successfully!");
        setTimeout(function () {
          window.location.href = "/";
        }, 1000);
      } catch (e) {
        toast.error(e.message.replace("Firebase: ", ""));
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-zinc-950">
      <div className="mb-4  sm:w-3/5 md:w-2/5 lg:w-1/5">
        <h1 className="text-4xl font-semibold text-center text-white uppercase mb-6">
          Reso
        </h1>
        <h1 className="text-xl font-semibold text-center text-white mb-5">
          Welcome back
        </h1>
        <Button
          label={"Sign In with Google"}
          onClick={"handleSignInWithGoogle"}
        />
        <form noValidate className="mb-4" onSubmit={handleSignIn}>
          <div className="grid gap-2">
            <div className="flex items-center justify-center">
              <hr className="flex-grow border-white " />
              <p className="text-white mx-3">OR</p>
              <hr className="flex-grow border-white " />
            </div>
            <div className="grid gap-1">
              <Input
                label={"Email"}
                id={"email"}
                placeholder={"name@example.com"}
                type={"email"}
                autoComplete={"email"}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label={"Password"}
                id={"password"}
                placeholder={"Password"}
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button label={"Sign In"} type={"submit"} />
          </div>
        </form>
        <div className="flex ">
          <h3 className=" mr-1 text-white">Didn't have an acount?</h3>
          <RouterLink to="/signup" className="text-green-600 hover:underline">
            Sign Up
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
