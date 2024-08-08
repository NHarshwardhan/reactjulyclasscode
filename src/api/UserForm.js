import React, { useEffect, useState } from "react";
import useUsers from "./useUsers";

export default function UserForm({ selectedUser }) {
  const { addNewUser, modifyUser } = useUsers();
  const [name, setName] = useState("");
  const [email, setEmail] = useState(" ");

  useEffect(() => {
    if (selectedUser) {
      // selectedUser{name:'', email:''}
      setName(selectedUser.name);
      setEmail(selectedUser.email);
    }
  }, [selectedUser]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedUser) {
      modifyUser(selectedUser.id, { name, email });
    } else {
      addNewUser({ name, email });
    }

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="enter name"
        />
      </label>

      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter email"
        />
      </label>

      <button type="submit">{selectedUser ? "Update" : "Add"} User</button>
    </form>
  );
}
