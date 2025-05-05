### Package.json 👇🏽

```jsx
"scripts": {
    "test": "jest",
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },
```

- parcel index.html ⇒ npm run start ⇒ npm start
- parcel build index.html ⇒ npm run build

## JSX

- JSX is created by FB developers to make the React elements easier to read.
- JSX is separate and react is separate
- we can write React code without JSX.
- JSX makes the readability and writing React Element easier.
- JS Engine understands ECMA script not JSX

### Babel

```jsx
JSX Code 
   ↓ (1)
Babel Transpilation 
   ↓ (2)
React.createElement(...) – This creates a React Element (a plain JS object)
   ↓ (3)
ReactDOM.render(...) – Converts React Element into HTML Elements (DOM nodes)
```

- Parcel transpiles (converts) the JSX into JS using Babel (JS Transpiler or compiler) before the code reaches JS Engine
- Babel converts JSX into core React Element and then ReactDOM.render converts  it into HTML Element
- Bable also converts Modern JS code into before ES6 code so that old browser also understands the JS.

### React Components

- Class Based Components - OLD
- Functional Components - NEW
    - Functional Component in react is just a normal JS function which returns JSX or React.createElement Object. which gets transpiled into HTML via root.render()
    - 1st letter of the name of component should be Capital.
    - Putting a component inside a component is component composition
    - we can write any JS experssion ( which produces a result) inside {} inside a functional component
    - JSX sanatizes the data then pass the data which can come from an api, which is required to be safe from cross site scripting attacks `{API_DATA}` ⇒ Sanatized via JSX
    
    ```
    // RENDER a Functional Component
    root.render(<HeadingFunctionalComponent />);
    root.render(HeadingFunctionalComponent());
    ```