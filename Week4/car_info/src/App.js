import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [car, setCar] = useState("");
  useEffect(() => {
    Axios.post("/api/cars").then((response) => {
      if (response.data) {
        setCar(response.data);
      } else {
        alert("failed to");
      }
    });
  }, []);

  Axios.get("/api/getcar").then((response) => {
    if (response.data) {
      console.log(response.data);
      setCar(response.data);
    } else {
      alert("failed to");
    }
  });

  return (
    <div className="App">
      <div align="left" style={{ margin: "20px" }}>
        <h2>GCU React-Spring Integration</h2>
        ID: {car.id} <br />
        Brand: {car.brand} <br />
        Company: {car.company} <br />
        Price: {car.price} <br />
      </div>
    </div>
  );
}

export default App;
