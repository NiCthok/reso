import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth,db } from "../backend/config/firebase";
import Button from "../components/Button";
import Input from "../components/Input";
import toast from 'react-hot-toast';
const Signup = () => {
  const [pass1, setPass1] = useState("");
  const [password, setPass2] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    if(!name){
      toast.error("Name is required");
      return;
    }
    else if(!email){
      toast.error("Name is required");
      return;
    }
    else if (pass1 != password) {
      toast.error("Your password is not the same, Please enter the same password");
      return;
    } else if( pass1.length == 0) {
      toast.error("Please enter a password");
      return;
    }
    else{
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log(user.email);
        console.log(name);
        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            name: name,
            role: "user"
          });
        }
        toast.success('Account Successfully created!');
        setTimeout(function() {window.location.href = "/"},1000)
      } catch (e) {
        toast.error(e.message);
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 ">
      <div className="mb-4 w-1/5 pt-4">
        <h1 className="text-4xl font-semibold text-center text-white uppercase mb-6">
          Reso
        </h1>
        <h1 className="text-xl font-semibold text-center text-white mb-5">
          Sign Up
        </h1>
        <Button label={"Sign Up with Google"} />
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
          <RouterLink to="/login" className="text-green-600 hover:underline">
            Sign In
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
