import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./Redux/actions";
function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className="App">
      {users.length > 0 ? users.map((elt ) => <h1 key={elt.id}>{elt.email}</h1>) : "loading"}
    </div>
  );
}

export default App;
