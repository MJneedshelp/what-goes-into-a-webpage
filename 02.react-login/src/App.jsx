import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Email required");
    } else if (!password) {
      setMessage("Password required");
    } else if (password.length < 4) {
      setMessage("Password must be at least 4 characters");
    } else if (email === "admin@42.sg" && password === "424242") {
      setMessage("Login success");
      setEmail("");
      setPassword("");
    } else {
      setMessage("Login failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default App;