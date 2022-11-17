import { useState } from "react";
import { createContext } from "react";

export const DarkmodeContext = createContext();

export const DarkMode = ({ children }) => {
  const [darkmode, setdarkmode] = useState(true);
  const handleChange = () => {
    setdarkmode(!darkmode);
  };
  return (
    <DarkmodeContext.Provider value={{ handleChange, darkmode, setdarkmode }}>
      {children}
    </DarkmodeContext.Provider>
  );
};
