import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";



function App(){
  return <>
            <Header />
            <Body/>
        </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
// root.render(HeadingFunctionalComponent());
