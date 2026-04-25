import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function FinancialSetup() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    netWorth: "",
    monthlySavings: "",
    income: "",
    expenses: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, ...form });
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Financial Info</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Net Worth" onChange={(e)=>setForm({...form, netWorth:e.target.value})}/>
        <input placeholder="Monthly Savings" onChange={(e)=>setForm({...form, monthlySavings:e.target.value})}/>
        <input placeholder="Income (optional)" onChange={(e)=>setForm({...form, income:e.target.value})}/>
        <input placeholder="Expenses (optional)" onChange={(e)=>setForm({...form, expenses:e.target.value})}/>
        <button type="submit">Go to Dashboard</button>
      </form>
    </div>
  );
}