- App.js should be below the React Import script as App.js is using react
- what is crossorigin ? why we write it.
- what is React Element - Object
- Difference between development and production CDN links
- what is CDN?
- A person who is NOT CURIOUS, is NOT a Great Developer, BE CURIOUS! Question Every Small thing

# App.js

## React.createElement()

```
React.createElement(element, {prop/attribute}, child || [child1, child2])
```

Inside {} we give attributes
React.createElement is just an JS Object (React Element) created by the function that takes 3 values,

1. Element == object
2. {} Props
3. children : if multiple [Array of children for sibling tags] |
   Pass React Element i.e or data, `<div>, <h1>`

ReactElement(Object) ==> root.render(Ract-Element) ==> HTML(Browser understands)

## root.render()

root.render() function's job is to take Element(JS Object) and create H1 tag and Put it in DOM which browser understands and it puts that inside the root

- If root div has anything before render, it will be replaced after we render the React Element inside the root.

- const root = ReactDOM.createRoot(document.getElementById("root"));

- root = ReactDOM.createRoot() is responsible to Assign a root to the React App;

- root.render(parent) === [React Element]Object ==> HTML (DOM)

- we can use react in a part of a website as well we just have to render the root at the part where we want react, other parts of the application will run as usual. as React is a Library not a framework
