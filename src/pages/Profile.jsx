import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../backend/config/firebase";
import { getAuth, signOut, deleteUser } from "firebase/auth";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Edit from "./Edit";
import toast from 'react-hot-toast';

const Profile = () => {
  const [popup, setPopup] = useState(false);
  const [profile, setProfile] = useState(null);
  const [uid, setUid] = useState(null);

  const authInstance = getAuth();

  const handleLogOut = () => {
    signOut(authInstance)
      .then(() => {
        console.log("SignOut Success");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleDeleteAccount = async () => {
    if (!uid) return;

    try {
      const user = authInstance.currentUser;
      await deleteDoc(doc(db, "Users", uid));
      await deleteUser(user);
      toast.success("Account deleted successfully!");
      window.location.href = "/";
    } catch (error) {
      toast.error(error.message);
      console.error("Error deleting account:", error.message);
    }
  };

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUid(user.uid);
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
        } else {
          console.log("User document not found");
        }
      } else {
        console.log("Not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {profile ? (
        <div className="h-screen bg-green-200 flex items-center justify-center">
          <div>
            <h1 className="text-3xl">Profile</h1>
            <h2>Name: {profile.name}</h2>
            <h2>Email: {profile.email}</h2>
            <Button type="button" label="Edit" onClick={() => setPopup(true)} />
            <Button type="button" label="Log Out" onClick={handleLogOut} />
            <Button
              type="button"
              label="Delete Account"
              onClick={handleDeleteAccount}
              className="bg-red-600 text-white"
            />
          </div>
          {popup && (
            <Edit
              name={profile.name}
              onClose={() => setPopup(false)}
              uid={uid}
            />
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Profile;
