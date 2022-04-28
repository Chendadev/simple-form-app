import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [goNext, setGoNext] = useState(false);

  return (
    <div className="App">
      <div className="header">
        {goNext === true ? (
          <div className="resultat-trouve">
            <p>{email}</p>
            <p>{password}</p>
          </div>
        ) : (
          <Form
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            goNext={goNext}
            setGoNext={setGoNext}
          />
        )}
      </div>
    </div>
  );
}

export default App;
