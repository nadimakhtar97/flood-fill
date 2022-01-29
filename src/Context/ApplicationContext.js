import React, { createContext, useEffect, useState } from "react";

export const ApplicationContext = createContext();

// This context provider is passed to any component requiring the context
export const ApplicationProvider = ({ children }) => {

//   const [color, setColor] = useState(2);

     const [row, setRow] = useState(4);
     const [col, setCol] = useState(4);
     const [matrix,setMatrix] = useState([[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2]]);
     const [visited,setVisited] = useState([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]);
  
  return (
    <ApplicationContext.Provider value={{row,setRow,col,setCol,matrix,setMatrix,visited,setVisited}}>
      {children}
    </ApplicationContext.Provider>
  );
};

