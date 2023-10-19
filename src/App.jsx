import { useState } from "react"
import "./App.css"
import Todolist from "./Todolist"
import Home from "./components/Home";
import { Tab, Tabs } from "@mui/material";


//export default voi laittaa myös funktion eteen :)
function App() {

  const [value, setValue] = useState('Home');

  const handleChange = (event, value) => {
    setValue(value);
  }

  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <Tab value="Home" label="Home"></Tab>
        <Tab value="Todolist" label="Todos"></Tab>
      </Tabs>
      {value === "Home" && <Home />}
      {value === "Todolist" && <Todolist />}
    </>
  )
}

export default App

