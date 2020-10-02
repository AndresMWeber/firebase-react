import {
  auth as firebaseAuth,
  database as firebaseDatabase,
  storage as firebaseStorage,
} from "firebase";

let INSTANCE;

export const Firebase = () => {
  if (INSTANCE) {
    return INSTANCE;
  }

  const auth = firebaseAuth();
  const db = firebaseDatabase(); // .ref("/path/to/ref").on("value", (snapshot) => {});
  const storage = firebaseStorage(); //.ref('/path/to/ref').getDownloadURL().then(() => { });

  const currentUser = () => {
    return auth.currentUser;
  };

  const updateUser = (userData) => {
    auth.currentUser
      .updateProfile(userData)
      .then(() => {
        console.log("user updated successfully");
      })
      .catch(function (error) {
        console.log("Error updating user: ", error);
      });
  };

  const updateUserEmail = (email) => {
    auth.currentUser
      .updateEmail(email)
      .then(() => {
        console.log("user email updated successfully");
      })
      .catch(function (error) {
        console.log("Error updating user email: ", error);
      });
  };

  const sendUserVerificationEmail = () => {
    auth.currentUser
      .sendEmailVerification()
      .then(() => {
        console.log("user verification email sent successfully");
      })
      .catch(function (error) {
        console.log("Error sending verification email to user: ", error);
      });
  };

  const deleteUser = () => {
    auth.currentUser
      .delete()
      .then(() => {
        console.log("user deleted successfully");
      })
      .catch(function (error) {
        console.log("Error deleting user: ", error);
      });
  };

  const sendUserPasswordResetEmail = () => {
    const user = auth.currentUser;
    auth
      .sendPasswordResetEmail(user.email)
      .then(() => {
        console.log("user password reset email successfully");
      })
      .catch(function (error) {
        console.log("Error sending password reset email: ", error);
      });
  };

  const updateUserPassword = (newPassword) => {
    auth.currentUser
      .updatePassword(newPassword)
      .then(() => {
        console.log("user deleted successfully");
      })
      .catch(function (error) {
        console.log("Error deleting user: ", error);
      });
  };
  INSTANCE = {
    storage,
    auth,
    db,
    currentUser,
    deleteUser,
    updateUser,
    updateUserPassword,
    updateUserEmail,
    sendUserVerificationEmail,
    sendUserPasswordResetEmail,
  };
  return INSTANCE;
};
