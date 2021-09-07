import React from "react";
import  {useState} from "react";
import ReactDOM from "react-dom";
import Diff from "./Diff";

function  App() {
    const[data,setData]=useState(null);
    const [print,setPrint]=useState(false);
    function getData(val)
    {
      setData(val.target.value)
      setPrint(false)
    }
    return (
      <main>
        <h2>Word diff</h2>
         <h1>capital city capital city of India of Maharashtra New Delhi is the is Mumbai national and</h1>
        <br></br>
         <input type='text' onChange={getData} Style="width:1000px;height:100px"/>
         <br></br>
         <br></br>
        <button onClick={()=>setPrint(true)}>Submit</button>
        <br></br><br></br>
        {
          print?
          <Diff
          string1="New Delhi is the national capital city of India and The capital city of Maharashtra is Mumbai"
          string2={data}
          mode="words"
        />
          :null
        }

      </main>
    );
  }


ReactDOM.render(<App />, document.getElementById("root"));
