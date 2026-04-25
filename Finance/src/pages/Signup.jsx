import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, ...form });
    navigate("/profile");
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Full Name" onChange={(e)=>setForm({...form, fullName:e.target.value})}/>
        <input placeholder="Email" onChange={(e)=>setForm({...form, email:e.target.value})}/>
        <input type="password" placeholder="Password" onChange={(e)=>setForm({...form, password:e.target.value})}/>
        <input placeholder="Mobile (optional)" onChange={(e)=>setForm({...form, phone:e.target.value})}/>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}