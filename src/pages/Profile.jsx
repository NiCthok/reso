import { useState, useEffect } from "react";
import { auth, db } from "../backend/config/firebase";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import {
  getAuth,
  signOut,
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import Loading from "./Loading";
import Edit from "./Edit";
import toast from "react-hot-toast";
import Delete from "./Delete";
import { CiLogout } from "react-icons/ci";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [uid, setUid] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEventsRegister, setShowEventsRegister] = useState(false);
  const [password, setPassword] = useState("");
  const authInstance = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUid(user.uid);
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
        }
      }
    });
  }, []);

  const handleLogOut = () => {
    signOut(authInstance)
      .then(() => {
        toast.success("Logged out successfully!");
        window.location.href = "/";
      })
      .catch((error) => {
        toast.error("Logout failed: " + error.message);
      });
  };

  const handleDeleteAccount = async () => {
    if (!uid || !password) {
      toast.error("Please enter your password to proceed.");
      return;
    }

    try {
      const user = authInstance.currentUser;
      const credential = EmailAuthProvider.credential(user.email, password);
      await reauthenticateWithCredential(user, credential);
      await deleteDoc(doc(db, "Users", uid));
      await deleteUser(user);
      toast.success("Account deleted successfully!");
      setShowDeleteModal(false);
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      toast.error("Failed to delete account: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex">

      <div className="w-1/4 bg-zinc-900 shadow-md shadow-red-500/50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-red-500">
          Hello, {profile?.name}
        </h2>
        <nav>
          <ul className="space-y-2">
            <li className="p-2  text-red-400 text-xl font-bold ">My Profile</li>
            <li
              className={`p-2 rounded cursor-pointer transition ${
                !showEventsRegister ? "bg-red-600 " : "hover:bg-red-500/30"
              }`}
              onClick={() => setShowEventsRegister(false)}
            >
              Profile Information
            </li>
            <li
              className={`p-2 rounded cursor-pointer transition ${
                showEventsRegister ? "bg-red-600 " : "hover:bg-red-500/30"
              }`}
              onClick={() => setShowEventsRegister(true)}
            >
              Events Registered
            </li>
            <li
              className="p-2 flex items-center gap-2 rounded cursor-pointer transition hover:text-red-500 hover:font-bold"
              onClick={handleLogOut}
            >
              <CiLogout className="text-xl transition hover:text-red-500" />{" "}
              Logout
            </li>
          </ul>
        </nav>
      </div>

      
      <div className="bg-zinc-900 p-6 shadow-md shadow-red-500/50 rounded-md w-1/2 ml-10">
        {profile ? (
          <>
            {showEventsRegister ? (
              
              <div>
                <h2 className="text-2xl font-semibold text-red-500">
                  Events Registered
                </h2>
                <p className="text-gray-400 mt-2">No content available yet.</p>
              </div>
            ) : (
              
              <Edit
                profile={profile}
                uid={uid}
                setProfile={setProfile}
                editMode={editMode}
                setEditMode={setEditMode}
              />
            )}

            
            {!showEventsRegister && (
              <div className="mt-6 text-right">
                <button
                  onClick={() => setShowDeleteModal(true)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 shadow-md  transition"
                >
                  Delete Account
                </button>
              </div>
            )}
          </>
        ) : (
          <Loading />
        )}
      </div>

      
      {showDeleteModal && (
        <Delete
          onChange={(value) => setPassword(value)}
          onClickCancel={() => setShowDeleteModal(false)}
          onClickDelete={handleDeleteAccount}
        />
      )}
    </div>
  );
};

export default Profile;
