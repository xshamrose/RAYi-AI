// HeaderContext.js
import React, { createContext, useState } from 'react';

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
 const [headerState, setHeaderState] = useState({
    title: "Default Title",
    subtitle: "Default Subtitle",
 });

 return (
    <HeaderContext.Provider value={{ headerState, setHeaderState }}>
      {children}
    </HeaderContext.Provider>
 );
};

