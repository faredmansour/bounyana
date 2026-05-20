import './App.css'
import Dashboard from "./Pages/DashboardPages/Dashboard";
import { createContext, useState } from 'react';


export const Context = createContext();
function App() {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <Context.Provider value={{ isTyping, setIsTyping }}>
      <Dashboard/>
    </Context.Provider>
  )
}

export default App
