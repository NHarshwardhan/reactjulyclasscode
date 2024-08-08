import { useEffect, useState } from "react";
import { addUser, fetchUsers, updateExistingUser } from "./userService";

const useUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("inside useEffect - useUsers");

    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        console.log(data);
        setUsers(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  const addNewUser = async (user) => {
    try {
      const data = await addUser(user);
      setUsers(data);
    } catch (err) {
      setError(err);
    }
   };


   const modifyUser = async (id,user) => {
    try {
       await updateExistingUser(id,user);

    } catch (err) {
      setError(err);
    }
   };


  return {
    users,
    loading,
    error,
    addNewUser,
    modifyUser
  };
};

export default useUsers;
