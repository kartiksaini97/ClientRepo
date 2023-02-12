import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import AddClient from "./components/AddClient/AddClient";
import ClientData from "./components/ClientData/ClientData";

function App() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/clients").then(({ data }) => {
      setAllData(data);
    });
  }, [allData]);

  const onAddHandler = (clientData) => {
    axios.put("http://localhost:8080/clients", clientData);

    setAllData((prevData) => {
      return [...prevData, clientData];
    });
  };

  const onDeleteHandler = (dataToDelete) => {
    fetch(`http://localhost:8080/clients/${dataToDelete.id}`, {
      method: "DELETE",
    });

    setAllData((prevData) => {
      return [...prevData];
    });
  };

  return (
    <>
      <Navbar />
      <AddClient onAddClient={onAddHandler} />
      <ClientData data={allData} onClientDelete={onDeleteHandler} />
    </>
  );
}

export default App;
