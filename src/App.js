import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setListUsers([...response.data]);
    });
  }, []);
 
  return (
    <div className="App">
      {listUsers.length >0 ? listUsers.map((elt)=><h1>{elt.email}</h1>) :'no data to display'}
    </div>
  );
}

export default App;
