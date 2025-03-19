import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../backend/config/firebase";
import toast from "react-hot-toast";

const Edit = ({ name, onClose, uid }) => {
  const [updatedName, setUpdatedName] = useState("");

  const handleUpdate = async () => {
    if (!updatedName) {
      toast.error("Name cannot be empty!");
      return;
    }

    try {
      const userDoc = doc(db, "Users", uid);
      await updateDoc(userDoc, { name: updatedName });
      toast.success("Name Changed Successfully!");

      setTimeout(() => {
        window.location.href = "/profile";
      }, 1000);
    } catch (e) {
      toast.error(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-zinc-950/75">
      <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl text-white font-bold mb-4">Edit Profile</h2>

        <Input
          label={"Name"}
          placeholder={name}
          type={"text"}
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
          required={true}
          id={"name"}
        />

        <div className="mt-4 flex justify-end gap-2">
          <Button label={"Cancel"} type={"button"} onClick={onClose} />
          <Button label={"Update"} onClick={handleUpdate} type={"button"} />
        </div>
      </div>
    </div>
  );
};

export default Edit;
