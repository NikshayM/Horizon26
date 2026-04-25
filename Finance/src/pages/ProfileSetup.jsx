import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function ProfileSetup() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    age: "",
    city: "",
    occupation: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, ...form });
    navigate("/financial");
  };

  return (
    <div>
      <h2>Profile Info</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Age" onChange={(e)=>setForm({...form, age:e.target.value})}/>
        <input placeholder="City (optional)" onChange={(e)=>setForm({...form, city:e.target.value})}/>
        <input placeholder="Occupation (optional)" onChange={(e)=>setForm({...form, occupation:e.target.value})}/>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}