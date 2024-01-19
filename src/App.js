import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import backgroundLight from './image/1000_F_69483741_ImrrZwYAsblea4pO5I9LGrNHrcH9xpy6.jpg'
import backgroundDark from './image/imageedit_8_2298207938.jpg'



function App() {

  const [theme,setTheme] = useState("light")
  const [background,setBackground] = useState(backgroundLight)
  const [mode, setmode] = useState(true);
  const [active, setactive] = useState("Light");



  const changeMode = () => {
    if (mode) {
      setmode((mode) => !mode);
      setactive((active) => "Dark");
    } else {
      setmode((mode) => !mode);
      setactive((active) => "Light");
    }
  };


  function changeTheme(){
    if(theme == "light"){
      setTheme("dark")
    }
    else{
      setTheme("light")
    }
    console.log(theme)
  }

  useEffect(() => {
    setBackground(theme == "dark" ? backgroundDark : backgroundLight)
  
  },[theme])


  return (
    <div>
      <img src={background} className="background-image" />
      <button className='theme-change-button' onClick={changeTheme} id="theme"><h3>Change Theme</h3></button>
      <QuestionBox Questions = {questions}/>
    </div>
  );
}

export default App;