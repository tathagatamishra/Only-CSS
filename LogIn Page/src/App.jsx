import { useState } from "react";
import "./App.scss";

function App() {
  const [showLog, setShowLog] = useState(true);
  const [showSign, setShowSign] = useState(false);

  function showOnClick(show) {

    
    if (show == 1) {
      document.querySelector("title").innerHTML = "Log in"
      setShowSign(false);
      setShowLog(true);
    } else {
      document.querySelector("title").innerHTML = "Sign up"
      setShowLog(false);
      setShowSign(true);
    }
  }

  return (
    <div className="main">
      <div className="form">
        {showLog && (
          <div className="logIn">
            <h1>Log In</h1>
            <label htmlFor="">Email</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="text" />
            <button className="submitBtn">Log in</button>
            <button className="chooseBtn" onClick={() => showOnClick(0)}>
              Don't have an account? Sign up
            </button>
          </div>
        )}

        {showSign && (
          <div className="signUp">
            <h1>Sign Up</h1>
            <label htmlFor="">Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="text" />
            <button className="submitBtn">Sign up</button>
            <button className="chooseBtn" onClick={() => showOnClick(1)}>
              Have an account? Log in
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
