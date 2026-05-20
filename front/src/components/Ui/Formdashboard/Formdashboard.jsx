import { useState, useContext, useEffect } from "react";
import { Context } from "../../../App";

function Formdashboard({ users, setUsers }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsTyping } = useContext(Context);

  useEffect(() => {
    if (email.length > 0 || password.length > 0) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
    return () => setIsTyping(false);
  }, [email, password, setIsTyping]);

  const handleSubmit = (e) => {

    e.preventDefault();

    const newUser = {
      email,
      password
    };

    setUsers([...(users || []), newUser]);

    setEmail("");
    setPassword("");
  };

  return (

    <div className="container py-4">

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>

      </form>

    </div>
  );
}

export default Formdashboard;