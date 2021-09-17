import "./styles.css";
import React, { useState } from "react";
var emojiDictionary = {
  "💣": "Bomb",
  "💌": "Love letter",
  "🔪": "Knife",
  "🧭": "Compass",
  "🧱": "Brick"
};
//to convert emojidictionary into array
var myarry = Object.keys(emojiDictionary);
//console.log(myarry);
//we use useState to get the values in view
export default function App() {
  var [meaning, setMeaning] = useState("");
  function clickHandler(curr_value) {
    //console.log("clicked:", curr_value);
    meaning = emojiDictionary[curr_value];
    setMeaning(meaning);
  }
  //var [meaning, setMeaning] = useState("");
  function changeHandler() {
    var inp = event.target.value; // to access the value where event was dispatched
    //meaning = inp;
    // for inp we've to search out dictionary, if found the show the meaning otherwise show "no found"
    meaning = emojiDictionary[inp];
    if (meaning === undefined) {
      meaning = "not found in database !";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emojipedia {"🔎"}</h1>
      <input
        style={{
          marginBottom: "1rem",
          width: "15rem",
          height: "2.5rem",
          textAlign: "center"
        }}
        onChange={changeHandler}
      />
      <br />
      {/*now we have to traverse the list, we'll use map method to traverse,
      map can only be applied on arrays,
      we wrote this bit of code(use =>) inorder to pass curr_value to clickHandler
      "() => clickHandler(curr_value)"
      */}
      <small style={{ marginBottom: "", fontSize: "1.5rem" }}>{meaning}</small>
      <br />
      <h3>Emojis the current database has {"👇"} </h3>
      {myarry.map(function listPrint(curr_value, index) {
        return (
          <span
            key={curr_value}
            onClick={() => clickHandler(curr_value)}
            style={{
              padding: "1rem",
              cursor: "pointer",
              marginTop: "5rem",
              fontSize: "1.5rem"
            }}
          >
            {curr_value}
          </span>
        );
      })}
    </div>
  );
}
