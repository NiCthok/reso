import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../backend/config/firebase";
import toast from "react-hot-toast";

const Edit = ({ profile, uid, setProfile, editMode, setEditMode }) => {
  const [updatedName, setUpdatedName] = useState(profile.name);

  const handleUpdate = async () => {
    if (!updatedName.trim()) {
      toast.error("Name cannot be empty!");
      return;
    }

    try {
      const userDoc = doc(db, "Users", uid);
      await updateDoc(userDoc, { name: updatedName });
      setProfile((prevProfile) => ({ ...prevProfile, name: updatedName }));
      setEditMode(false);
      toast.success("Name Changed Successfully!");
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div>
      <h1 className="text-red-500 text-2xl font-semibold mb-4 flex justify-between">
        Personal Information
        <button
          onClick={editMode ? handleUpdate : () => setEditMode(true)}
          className="text-red-300 px-3 py-1 rounded-md transition hover:text-red-500"
        >
          {editMode ? "Save" : "Edit"}
        </button>
      </h1>
      <div className="mb-4">
        <label className="block text-white pb-2">Name</label>
        <input
          type="text"
          name="name"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
          className={`w-full p-2 bg-black border border-red-500 rounded-md transition focus:outline-none 
          ${editMode ? "hover:bg-red-500/20" : "cursor-not-allowed opacity-50"}`}
          disabled={!editMode}
        />
      </div>
      <div className="mb-4 flex justify-between">
        <h2 className="text-lg font-semibold">Email Address</h2>
        <p className="text-gray-400">{profile.email}</p>
      </div>
    </div>
  );
};

export default Edit;

