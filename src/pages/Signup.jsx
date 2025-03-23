import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../backend/config/firebase";
import Button from "../components/Button";
import Input from "../components/Input";
import toast from "react-hot-toast";

const Signup = () => {
  const [pass1, setPass1] = useState("");
  const [password, setPass2] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name) {
      toast.error("Name is required");
      return;
    } else if (!email) {
      toast.error("Name is required");
      return;
    } else if (pass1 != password) {
      toast.error(
        "Your password is not the same, Please enter the same password"
      );
      return;
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log(user.email);
        console.log(name);
        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            name: name,
            role: "user",
          });
        }
        toast.success("Account Successfully created!");
        setTimeout(function () {
          window.location.href = "/";
        }, 1000);
      } catch (e) {
        toast.error(e.message.replace("Firebase: ", ""));
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center  ">
      <div className="mb-4 sm:w-3/5 md:w-2/5 lg:w-1/5 bg-slate-950 py-6 px-6 rounded-xl drop-shadow-[0_0_40px_rgba(0,102,255,0.8)] shadow-[0_0_15px_rgba(0,102,255,0.8)]">
        <h1 className="text-4xl text-center  font-extrabold text-white uppercase mb-6 [text-shadow:0_0_10px_rgba(255,0,0,0.8),0_0_20px_rgba(255,0,0,1),0_0_30px_rgba(255,0,0,1)]">
          Reso 2025
        </h1>
        <h1 className="text-xl font-semibold text-center text-white mb-5">
          Sign Up
        </h1>
        <Button
          label={"Sign Up with Google"}
          onClick={"handleSignInWithGoogle"}
        />
        <form noValidate className="mb-4" onSubmit={handleSignUp}>
          <div className="flex items-center justify-center">
            <hr className="flex-grow border-white " />
            <p className="text-white mx-3">OR</p>
            <hr className="flex-grow border-white " />
          </div>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Input
                label={"Name"}
                id={"name"}
                placeholder={"Name"}
                type={"text"}
                required={true}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label={"Email"}
                id={"email"}
                placeholder={"name@example.com"}
                type={"email"}
                required={true}
                autoComplete={"email"}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label={"Password"}
                id={"password"}
                placeholder={"Password"}
                type={"password"}
                required={true}
                onChange={(e) => setPass1(e.target.value)}
              />
              <Input
                label={"Renter Password"}
                id={"renter_password"}
                placeholder={"Renter Password"}
                type={"password"}
                required={true}
                onChange={(e) => setPass2(e.target.value)}
              />
            </div>
            <Button label={"Create Account"} type={"submit"} />
          </div>
        </form>
        <div className="flex ">
          <h3 className=" mr-1 text-white">Already have an acount?</h3>
          <RouterLink
            to="/login"
            className="text-blue-500 hover:font-semibold hover:underline"
          >
            Sign In
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
