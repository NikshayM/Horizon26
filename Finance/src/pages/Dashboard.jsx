import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Hello {user.fullName}</h2>

      <h3>Net Worth: ₹{user.netWorth}</h3>
      <h3>Monthly Savings: ₹{user.monthlySavings}</h3>

      <h3>Goals:</h3>
      {user.goals.length === 0 ? (
        <p>No goals added</p>
      ) : (
        user.goals.map((g, i) => <p key={i}>{g}</p>)
      )}
    </div>
  );
}