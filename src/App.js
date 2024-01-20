import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import QuestionBox from "./components/QuestionBox";
import backgroundLight from './image/1000_F_69483741_ImrrZwYAsblea4pO5I9LGrNHrcH9xpy6.jpg';
import backgroundDark from './image/imageedit_8_2298207938.jpg';

function App() {
  const [theme, setTheme] = useState("light");
  const [background, setBackground] = useState(backgroundLight);
  const [active, setActive] = useState("Light Mode");

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setActive((prevActive) => (prevActive === "Light Mode" ? "Dark Mode" : "Light Mode"));
  };

  useEffect(() => {
    setBackground(theme === "dark" ? backgroundDark : backgroundLight);
  }, [theme]);

  return (
    <div>
      <img src={background} className="background-image" alt="Background" />
      <button className='theme-change-button' onClick={changeTheme} id="mode">
        {active}
      </button>
      <QuestionBox Questions={questions} />
    </div>
  );
}

export default App;
