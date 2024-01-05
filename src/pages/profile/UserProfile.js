import { off, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

const UserProfile = () => {
  const [userData, setUserData] = useState([]);

  // useEffect(() => {
  //   onValue(
  //     ref(db, (snapshot) => {
  //       setUserData([]);
  //       const data = snapshot.val();
  //       if (data !== null) {
  //         Object.values(data).map((userData) => {
  //           return setUserData((oldArray) => [...oldArray, userData]);
  //         });
  //       }
  //     })
  //   );
  // }, []);
  useEffect(() => {
    const dbRef = ref(db);
    const onValueCallback = onValue(dbRef, (snapshot) => {
      setUserData([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((userData) => {
          return setUserData((oldArray) => [...oldArray, userData]);
        });
      }
    });

    return () => {
      off(dbRef, onValueCallback);
    };
  }, []);

  return (
    <div>
      <h1>UserProfile</h1>
      {userData.map((ud) => {
        return (
          <div>
            <h1>{ud.name}</h1>
            <h2>{ud.email}</h2>
            <h3>{ud.password}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default UserProfile;
