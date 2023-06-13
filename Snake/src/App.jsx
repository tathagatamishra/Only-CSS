import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [snake, setSnake] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  function handleKeyPress(event) {
    const key = event.key.toLowerCase();
    if (["w", "arrowup"].includes(key)) {
      control("a");
    } else if (["d", "arrowright"].includes(key)) {
      control("b");
    } else if (["s", "arrowdown"].includes(key)) {
      control("c");
    } else if (["a", "arrowleft"].includes(key)) {
      control("d");
    }
  }

  function control(key) {
    switch (key) {
      case "a":
        setSnake((prevSnake) => ({
          ...prevSnake,
          y: prevSnake.y - 100,
        }));
        break;
      case "b":
        setSnake((prevSnake) => ({
          ...prevSnake,
          x: prevSnake.x + 100,
        }));
        break;
      case "c":
        setSnake((prevSnake) => ({
          ...prevSnake,
          y: prevSnake.y + 100,
        }));
        break;
      case "d":
        setSnake((prevSnake) => ({
          ...prevSnake,
          x: prevSnake.x - 100,
        }));
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <div
        className="snake"
        style={{ transform: `translate(${snake.x}%, ${snake.y}%)` }}
      ></div>

      <section className="control">
        <button className="a" onClick={() => control("a")}>
          &#9651;
        </button>
        <button className="b" onClick={() => control("b")}>
          &#9711;
        </button>
        <button className="c" onClick={() => control("c")}>
          &#9587;
        </button>
        <button className="d" onClick={() => control("d")}>
          &#9744;
        </button>
      </section>
    </div>
  );
}

export default App;
