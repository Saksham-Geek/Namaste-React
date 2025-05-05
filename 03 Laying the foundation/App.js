import React from "react";
import ReactDOM from "react-dom/client";


// React.createElement => React Element(JS Object) => HTML Element(render)
/*
React.createElement(...) – This creates a React Element (a plain JS object)
   ↓ (1)
ReactDOM.render(...) – Converts React Element into HTML Elements (DOM nodes)
*/
const heading = React.createElement(
  "h1",
  { id: "heading" }, // attribute / Props
  "Hello from React"
);
console.log(heading); // Object

/*
<div id="parent">
<div id="child">
<h1>I am H1 tag</h1>
</div>
</div>
*/

// core React
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
]);

// JSX 

/*
JSX Code 
   ↓ (1)
Babel Transpilation 
   ↓ (2)
React.createElement(...) – This creates a React Element (a plain JS object)
   ↓ (3)
ReactDOM.render(...) – Converts React Element into HTML Elements (DOM nodes)

*/

const JsxHeading = <h1>This is JSX Heading</h1>
console.log(JsxHeading);

// React Functional Component
const FuncComp = () => {
  return  <h1>This is JSX Heading</h1>
}


// React Element
const ReactElem = (
    <h1>This is JSX Heading using React Element</h1>
)


const HeadingFunctionalComponent = () =>{
  return (
  <>
  {/* 3 ways to render a functional component - we can just render it like JS  */}
      <FuncComp/>
      <FuncComp></FuncComp>
      {FuncComp()}
      {ReactElem}
      {2+3}
      <h1>React Heading Functional Component</h1>
  </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingFunctionalComponent />);
// root.render(HeadingFunctionalComponent());
