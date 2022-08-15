import React,{useState} from "react";
import Header from "./components/Header.js";
import List from "./components/List.js";
import Values from "values.js";
const App = () => {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState(new Values('#f25025').all(10));
  return (
    <div className="container">
      <Header items={{color,setColor,error,setError,setList}} />
      <List list={list} />
    </div>
  );
};

export default App;
